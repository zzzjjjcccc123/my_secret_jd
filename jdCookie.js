/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJfoMT3ADDPkBeITogsD-QA7qwklGtsnL6kRxyWY0tHevf3l-xNLQqfa4fGHDyl7VEXGKIUTBQ; pt_pin=jd_7d7fc41100a91;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_key=AAJfqSJhADDJyUHEvlrI-OIRsl1vv6UPiVoFQV0LqnPCRL20OdRzpspLviAdEpJk52lLwqqf8nA; pt_pin=jd_71c64e3c47c68;',
  'pt_key=AAJfnixQADDDl5yt1x6T4ZE5j1I-ZATnu9S4pQp7_l74QWyPpJuU3B6tM3VdRfmJLVYIuiagqmU; pt_pin=jd_42b0f9e5b7431;',
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = process.env.JD_COOKIE.split();
  }
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
