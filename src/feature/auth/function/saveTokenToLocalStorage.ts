export default function saveTokenToLocalStorage(token: string){
  localStorage.setItem('token', token);
}