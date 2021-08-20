export default (time) => {
  const now = Date.parse(new Date());
  const cnt = now - time;
  const s = Math.floor(cnt/1000) //秒
  const m = Math.floor(s/60) //分
  const h = Math.floor(m/60) //时
  const d = Math.floor(h/24) //天
  return d > 0 ? `${d}天前`: h > 0 ? `${h}小时前` : m > 0 ? `${m}分钟前` : `${s}秒前`;
}