// Ganti alamat IP ini dengan IPv4 laptop (cek lewat 'ipconfig')
// Pastikan HP dan laptop terhubung ke Wi-Fi yang sama.
export const API_BASE_URL = "http://192.168.100.163:8000/api";

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/login`,
  REGISTER: `${API_BASE_URL}/register`,
  PROFILE: `${API_BASE_URL}/profile`,
  LOGOUT: `${API_BASE_URL}/logout`,
};
