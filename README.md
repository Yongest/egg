# egg



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

lsof -i:7001
kill -9 6834

静态文件目录


2019-08-04 23:22:53,893 WARN 39216 [ClusterClient:Connection] socket is closed by other side while there were still unhandled data in the socket buffer
[2019-08-04 23:22:53.904] [cfork:master:42204] worker:51136 exit (code: null, exitedAfterDisconnect: true, state: dead, isDead: true, isExpected: true, worker.disableRefork: false)
