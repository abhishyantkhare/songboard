const del = {
  deleted: true
}

export function del_req() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      resolve(del)
    })
  });
}