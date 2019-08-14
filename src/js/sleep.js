function sleep(t) {
  return new Promise(r =>
    setTimeout(() => {
      console.log(`sleep ${t}`);
      r();
    }, t)
  );
}
sleep(1000);
