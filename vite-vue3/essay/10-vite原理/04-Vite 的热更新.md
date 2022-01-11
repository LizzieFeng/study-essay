# Vite 的热更新

最后我们再来看一下热更新如何实现。热更新的目的就是在我们修改代码之后，浏览器能够自动渲染更新的内容，所以我们要在客户端注入一个额外的 JavaScript 文件，这个文件用来和后端实现 WebSocket 通信。
然后后端启动 WebSocket 服务，通过 chalk 库监听文件夹的变化后，再通过 WebSocket 去通知浏览器即可。
下面的代码中，我们通过 chokidar.watch 实现了文件夹变更的监听，并且通过 handleHMRUpdate 通知客户端文件更新的类型。

``````javascript


export function watch() {
  const watcher = chokidar.watch(appRoot, {
    ignored: ['**/node_modules/**', '**/.git/**'],
    ignoreInitial: true,
    ignorePermissionErrors: true,
    disableGlobbing: true,
  });
  watcher;

  return watcher;
}
export function handleHMRUpdate(opts: { file: string; ws: any }) {
  const { file, ws } = opts;
  const shortFile = getShortName(file, appRoot);
  const timestamp = Date.now();

  console.log(`[file change] ${chalk.dim(shortFile)}`);
  let updates;
  if (shortFile.endsWith('.css')) {
    updates = [
      {
        type: 'js-update',
        timestamp,
        path: `/${shortFile}`,
        acceptedPath: `/${shortFile}`,
      },
    ];
  }

  ws.send({
    type: 'update',
    updates,
  });
}

``````

然后客户端注入一段额外的 JavaScript 代码，判断后端传递的类型是 js-update 还是 css-update 去执行不同的函数即可。

``````javascript

async function handleMessage(payload: any) {
  switch (payload.type) {
    case 'connected':
      console.log(`[vite] connected.`);

      setInterval(() => socket.send('ping'), 30000);
      break;

    case 'update':
      payload.updates.forEach((update: Update) => {
        if (update.type === 'js-update') {
          fetchUpdate(update);
        } 
      });
      break;
  }
}

``````