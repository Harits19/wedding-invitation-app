export default function showLog(message: any) {
  if (!__DEV__) return;
  console.log(message);
}
