export const parsePassedArgs = (args: string[]) => {
  return args.map(arg => {
    const command = arg.split('=')
    return command[1] || command[0]
  })
}
