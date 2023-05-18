const { chromium } = require('playwright');
const fs = require('fs');

async function scrapeMelonChart() {
  // 웹 브라우저 실행
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // 멜론차트 페이지로 이동
  await page.goto('https://www.melon.com/chart/index.htm');

  // 노래 정보 추출
  const songs = await page.$$eval('.lst50, .lst100', (elements) =>
    elements.map((element) => {
      const title = element.querySelector('.ellipsis.rank01').innerText;
      const artist = element.querySelector('.ellipsis.rank02').innerText;
      const album = element.querySelector('.ellipsis.rank03').innerText;
      return { title, artist, album };
    })
  );

  // 브라우저 종료
  await browser.close();

  // 추출한 데이터를 JSON 문자열로 변환
  const data = JSON.stringify(songs, null, 2);

  // JSON 파일로 저장
  fs.writeFileSync('melon.json', data);

  console.log('멜론 차트를 melon.json으로 불러오는 데 성공하였습니다.');
}

scrapeMelonChart();
