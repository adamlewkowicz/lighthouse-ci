declare module 'kill-port' {
  const handler: (port: number, arg: 'tcp') => Promise<void>;
  export = handler;
}
