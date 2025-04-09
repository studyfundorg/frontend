export type ActionFormStatus = {
  error: boolean;
  message: string;
};

export type ApiResponse = {
  success: boolean;
  statusCode: number;
  message: string;
};

export type SignUp = {
  email: string;
  address: string;
  ocid: string;
  firstName: string;
  lastName: string;
  universityName: string;
  universityCity: string;
  universityCountry: string;
  transcriptUrl: File;
  schoolIdUrl: File;
};

export type SignUpResponse = ApiResponse & {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  universityName: string;
  universityCity: string;
  universityCountry: string;
  transcriptUrl: string;
  schoolIdUrl: string;
  createdAt: string;
  updatedAt: string;
};
