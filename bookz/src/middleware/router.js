function router(routes) {
  return async (ctx, next) => {
    const { url, method } = ctx

    const route = routes.find(r => {
      const re = toRegExp(r[1])
      return r[0] === method && !!url.match(re)
    })

    if (!route) {
      ctx.status = 404
      ctx.body = { error: 'Not Found' }
      return
    }

    const handler = route[2]

    const id = url.match(toRegExp(route[1]))[1]

    await handler(ctx, id)
    await next()
  }
}

module.exports = router

function toRegExp(url) {
  return new RegExp(`^${url}$`.replace(':id', '(\\d+)'))
}
