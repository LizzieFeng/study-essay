
async function unrollBuffer(buffer: SSRBuffer): Promise<string> {
    if (buffer.hasAsync) {
      let ret = ''
      for (let i = 0; i < buffer.length; i++) {
        let item = buffer[i]
        if (isPromise(item)) {
          item = await item
        }
        if (isString(item)) {
          ret += item
        } else {
          ret += await unrollBuffer(item)
        }
      }
      return ret
    } else {
      // sync buffer can be more efficiently unrolled without unnecessary await
      // ticks
      return unrollBufferSync(buffer)
    }
  }