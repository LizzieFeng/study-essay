
export function createBuffer() {
    let appendable = false
    const buffer: SSRBuffer = []
    return {
      getBuffer(): SSRBuffer {
        // Return static buffer and await on items during unroll stage
        return buffer
      },
      push(item: SSRBufferItem) {
        const isStringItem = isString(item)
        if (appendable && isStringItem) {
          buffer[buffer.length - 1] += item as string
        } else {
          buffer.push(item)
        }
        appendable = isStringItem
        if (isPromise(item) || (isArray(item) && item.hasAsync)) {
          // promise, or child buffer with async, mark as async.
          // this allows skipping unnecessary await ticks during unroll stage
          buffer.hasAsync = true
        }
      }
    }
  }