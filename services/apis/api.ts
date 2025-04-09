import { ResponseType } from "@/types/api";
import { OptionsType } from "@/types/api";

export class Api {
  // static base_url = process.env.NEXT_PUBLIC_BASE_URL!;
  static base_url = process.env.BASE_URL!;

  private static async getToken() {
    return null;
  }

  private static async getHeaders({
    auth = false,
    customHeader = "application/json",
  }: {
    auth?: boolean;
    customHeader?: string;
  }): Promise<Record<string, string>> {
    const headers: Record<string, string> = {};

    if (customHeader !== "multipart/form-data") {
      headers["Content-Type"] = customHeader;
    }
    headers["Accept"] = "application/json"; // Add a default Accept header

    if (auth) {
      const token = await this.getToken();
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  private static getRequestBody<T>(
    options: OptionsType<T>,
    headers: Record<string, string>,
  ) {
    if (
      options.method === "POST" ||
      options.method === "PUT" ||
      options.method === "PATCH" ||
      options.method === "DELETE"
    ) {
      if (options.body) {
        if (options.body instanceof FormData) {
          // Don't stringify the body, just return it
          delete headers["Content-Type"]; // Let the browser set the correct Content-Type
          return options.body;
        } else if (
          headers["Content-Type"] === "application/x-www-form-urlencoded"
        ) {
          return new URLSearchParams(
            options.body as Record<string, string>,
          ).toString();
        } else {
          return JSON.stringify(options.body);
        }
      }
      return null;
    }
    return null;
  }

  private static async handleResponse<R>(
    response: Response,
  ): Promise<ResponseType<R>> {
    if (response.ok) {
      return {
        ok: true,
        status: response.status,
        body: (await response.json()) as R,
      };
    } else {
      let errorMessage =
        response.status === 502 ? "Bad Gateway" : "An error occurred";
      let errorDescription = "";

      try {
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          const errorBody = await response.json();
          errorMessage = errorBody.message || errorMessage;
          errorDescription = errorBody.description || errorDescription;
        } else {
          errorDescription = await response.text();
        }
      } catch (e) {
        // Handle unexpected errors
        console.error("Error processing the response:", e);
        errorDescription =
          "An unexpected error occurred while processing the response.";
      }

      return {
        ok: false,
        status: response.status,
        body: {
          code: response.status,
          message: errorMessage,
          description: errorDescription,
        },
      };
    }
  }

  private static handleError<R>(error: unknown): ResponseType<R> {
    return {
      ok: false,
      status: 500,
      body: {
        code: 500,
        message: "Server is unresponsive. Please check internet connection.",
        description:
          error instanceof Error ? error.toString() : "Failed to fetch",
      },
    };
  }

  static async request<T, R>({
    base_url = this.base_url,
    options,
    auth = false,
    customHeader = "application/json",
  }: {
    base_url?: string;
    options: OptionsType<T>;
    auth?: boolean;
    customHeader?: string;
  }): Promise<ResponseType<R>> {
    const headers = await this.getHeaders({ auth, customHeader });
    const body = this.getRequestBody(options, headers);

    console.log({ url: base_url + options.url });

    try {
      const response = await fetch(base_url + options.url, {
        method: options.method,
        headers,
        body,
      });

      return this.handleResponse<R>(response);
    } catch (error) {
      return this.handleError<R>(error);
    }
  }

  static async get<R>(url: string, auth?: boolean) {
    return this.request<void, R>({
      options: { method: "GET", url },
      auth,
    });
  }

  static async post<T, R>(
    url: string,
    body?: T,
    auth?: boolean,
    customHeader?: string,
  ) {
    return this.request<T, R>({
      options: { method: "POST", url, body },
      auth,
      customHeader,
    });
  }

  static async delete<T, R>(url: string, body?: T, auth?: boolean) {
    return this.request<T, R>({
      options: { method: "DELETE", url, body },
      auth,
    });
  }

  static async patch<T, R>(
    url: string,
    body: T,
    auth?: boolean,
    customHeader?: string,
  ) {
    return this.request<T, R>({
      options: { method: "PATCH", url, body },
      auth,
      customHeader,
    });
  }

  static async put<T, R>(
    url: string,
    body: T,
    auth?: boolean,
    customHeader?: string,
  ) {
    return this.request<T, R>({
      options: { method: "PUT", url, body },
      auth,
      customHeader,
    });
  }

  static async fetchImageAsArrayBuffer(url: string) {
    const headers = await this.getHeaders({ auth: true });

    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      return {
        error: response.statusText || "Failed to fetch image",
        status: response.status,
      };
    }

    // Get the content type
    const contentType = response.headers.get("content-type");

    // Get the image data
    const buffer = await response.arrayBuffer();

    // Return both the buffer and content type
    return {
      buffer,
      contentType,
    };
  }
}
