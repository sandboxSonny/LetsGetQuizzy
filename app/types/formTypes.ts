export interface JoinFormData {
  id: string;
}

export interface HostFormData {
  name: string;
  roomName: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
}

export interface SetupFormData {
  categories: string[];
}
