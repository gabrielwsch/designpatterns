function repeat<T>(qntd: number, action: () => void) {
  let i = 0;
  while (i < qntd) {
    action();
    i++;
  }
}
export function log(msg: string, qntd: number): void {
  repeat(qntd, () => console.log(msg));
}
log("gabriel", 5);
