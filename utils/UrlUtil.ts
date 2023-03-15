

export function openNewTab(url: string){
  var win = window.open(url, "_blank");
  win?.focus();
}