const modal = document.querySelector('#content-modal');
const titleEl = document.querySelector('#modal-title');
const categoryEl = document.querySelector('#modal-category');
const mediaEl = document.querySelector('#modal-media');
const copyEl = document.querySelector('#modal-copy');
const actionsEl = document.querySelector('#modal-actions');
const closeButton = modal.querySelector('.modal-close');

const details = {
  'FANTSの基本的な使い方': { video: 'https://www.youtube.com/embed/vJkDWU2DPj0', text: '大人の小学校で使うコミュニティアプリ「FANTS」の画面構成と、基本的な操作をまとめた動画です。初めてログインした方は、まずここから確認してみましょう。' },
  'プロフィールの設定方法': { video: 'https://www.youtube.com/embed/vJkDWU2DPj0?start=96', text: 'プロフィールを整えると、共通点のある人から見つけてもらいやすくなります。まずは自己紹介だと思ってプロフィールを入力してみましょう。' },
  '投稿の方法': { image: './assets/post-guide.svg', text: '日々の気づきや質問、参加した活動について投稿してみましょう。短い文章だけでも大丈夫です。', links: [{ label: '雑談掲示板に投稿してみる', href: 'https://fants.jp/menus/135' },] },
  'コメントの方法': { image: './assets/comment-guide.svg', text: '気になる投稿には、コメントで気軽に反応できます。「こんにちは！」「私も〇〇好きです！」など、短い一言から交流を始めてみましょう。' },
  '通知設定について': { video: 'https://www.youtube.com/embed/vJkDWU2DPj0?start=125', text: '必要な情報を見逃さないように設定できます。' },
  'イベントの探し方': { text: '開催予定はイベント一覧から、内容や参加条件はイベント詳細から確認できます。気になる予定を見つけたら、日時と開催形式をチェックしましょう。', links: [{ label: 'イベント一覧を見る', href: 'https://fants.jp/salon_events' },] },
  'イベントへの参加方法': { text: 'イベントにはzoomで参加できるオンラインのイベント（授業）と、現地で交流するオフラインのイベントがあります。オフラインのイベントに参加するにはチケットの購入が必要な場合があります。まずはイベントの詳細をチェックしましょう。', links: [{ label: '授業のお知らせを見る', href: 'https://fants.jp/menus/54430' }, { label: 'イベントのお知らせを見る', href: 'https://fants.jp/menus/54429' }, { label: '販売中のチケット情報を見る', href: 'https://fants.jp/menus/18871' }] },
  '困ったときの問い合わせ先': { text: 'まずFANTSについて困ったときはFANTSのヘルプセンターを確認してみましょう。解決しない場合やその他の問い合わせは、問い合わせフォームから運営へ連絡できます。問い合わせ時は、困っている画面・操作した内容・表示されたメッセージを書くとスムーズです。', links: [{ label: 'FANTSのヘルプセンター', href: 'https://support.fants.jp/hc/ja/categories/4507104027663' }, { label: '問い合わせフォーム', href: 'https://fants.jp/inquiry' },] },
  'Zoomの使い方を知る': { video: 'https://www.youtube.com/embed/7naEGiHkA_U', text: 'オンライン授業や交流会で使うZoomの基本操作を動画で確認できます。参加前に、マイクとカメラが使えるかも確かめておくと安心です。' },
  'レクチャーZoomに参加する': { text: 'レクチャーZoomとは、教育実習生に大人の小学校の楽しみ方について直接聞くことができるZoomです。ひとりで解決しづらいことや、最初に聞いておきたいことがある方におすすめです。教育実習生のため、完璧にお答えできないこともあるかもしれませんが、みなさんと一緒に成長していけたら嬉しいです。開催日時と参加URLは、案内ページで最新情報を確認してください。', links: [{ label: 'レクチャーZoomのお知らせを見る', href: 'https://fants.jp/menus/57631' },] },
  '自己紹介をしてみる': { text: '最初の交流は自己紹介から！住んでいる地域、好きなこと、参加してみたい活動など、話しかけるきっかけになる情報を書いてみましょう。', links: [{ label: '自己紹介を投稿する', href: 'https://fants.jp/menus/140' },] },
  '新入生専用の掲示板を見る': { text: '同じ時期に入学した新入生同士で、気軽にあいさつや質問ができるスペースです。', links: [{ label: '26期生専用の掲示板を見る', href: 'https://fants.jp/menus/63544' },] },
  '同じ期の児童と交流する': { text: '入学した期ごとの掲示板なら、同じタイミングで参加した仲間とつながりやすくなります。各期ごとに専用の掲示板で交流してみましょう。', links: [{ label: '期ごとの専用掲示板を見る', href: 'https://fants.jp/menu_categories/49' },] },
  '淳校長のHRに参加する': { text: '淳校長の話を聞いたり、児童のみなさんと同じ時間を共有したりできるオンラインHRです。初参加でも、まずは見るだけで大丈夫です。', links: [{ label: '授業のお知らせを見る', href: 'https://fants.jp/menus/54430' }, { label: 'アーカイブを見る', href: 'https://fants.jp/menus/1271' }] },
  '興味のある公式クラブを探す': { text: '共通のテーマで活動する公式クラブを一覧から探せます。活動内容や雰囲気を見て、気になるクラブを覗いてみましょう。', links: [{ label: '公式クラブ一覧を見る', href: 'https://fants.jp/menu_categories/2717' },] },
  '地域が近い人と交流する': { text: '地域別の掲示板から、近くに住む児童と交流できます。地域の話題や、近隣イベントへの参加をきっかけに交流できます。', links: [{ label: '地域別の掲示板を見る', href: 'https://fants.jp/menu_categories/3830' },] },
  '趣味が近い人と交流する': { text: '好きなことや興味のあるテーマを軸に、サークル活動で仲間を見つけられます。公式クラブよりも幅広い種類・たくさんのサークルがあります。', links: [{ label: 'サークル一覧を見る', href: 'https://fants.jp/account' },] },
  'オフラインイベントに参加する': { text: '実際に会って交流できるイベントに参加してみましょう。各イベントのお知らせ投稿で、開催場所、集合時間、持ち物、申込方法を確認してから参加しましょう。', links: [{ label: 'イベントのお知らせを見る', href: 'https://fants.jp/menus/54429' }, { label: '販売中のチケット情報を見る', href: 'https://fants.jp/menus/18871' }] },
  'オンラインで話す': { text: '雑談掲示板やZoom交流なら、場所を問わず児童のみなさんと話せます。まずは聞くだけの参加でも大丈夫です。', links: [{ label: '雑談掲示板を見る', href: 'https://fants.jp/menus/135' }, { label: '365日24時間Zoomの掲示板を見る', href: 'https://fants.jp/menus/21332' }] },
  '公式クラブに参加する': { text: '気になった公式クラブがあったら、早速公式クラブに参加してみましょう。グループから気になった公式クラブを選び、「参加する」を押すことで、公式クラブの部屋で投稿することができます。', links: [{ label: '公式クラブ一覧を見る', href: 'https://fants.jp/departments/3085' },] },
  'プロジェクトに参加する': { text: '期間や目標を決めて、仲間と一緒に取り組む活動です。まずはプロジェクトガイドを読んだり、公開会議に参加して進め方や雰囲気を見てみましょう。', links: [{ label: 'プロジェクト一覧を見る', href: 'https://fants.jp/departments/3219' }, { label: 'プロジェクトガイドを読む', href: 'https://fants.jp/menus/15539' }, { label: 'プロジェクト公開会議のお知らせを見る', href: 'https://fants.jp/menus/54430' }, { label: '過去の公開会議のアーカイブを見る', href: 'https://fants.jp/menus/54465' }] },
  '過去の挑戦事例を見る': { text: 'これまで児童のみなさんが取り組んだプロジェクトを紹介しています。自分がやってみたいことを考えるヒントとして活用してください。', links: [{ label: '過去のプロジェクト一覧を見る', href: 'https://fants.jp/menu_categories/14186' }] },
  'たむポを貯める': { text: '大人の小学校での活動を楽しみながら「たむポ」を貯められます。自己紹介の投稿や特別対談の感想を投稿することで手に入れられるほか、HRやオフラインイベントの中で開催されるゲームなどでもたむポを手に入れられることも！貯めたたむポは、様々なグッズや大人の小学校の会費などに交換できます。', links: [{ label: 'たむポの貯め方についてもっと知る', href: 'https://fants.jp/menus/15534' }] },
  'たむポを使う': { text: '貯めたたむポは、様々なグッズや大人の小学校の会費などに交換できます。交換したいものがある場合は、専用のフォームから申請しましょう。', links: [{ label: '申請フォームを見る', href: 'https://fants.jp/menus/12487' }] },
  '耳クラを聞く': { text: '淳校長、森本教頭、チワワ先生によるラジオコンテンツです。毎週水曜日の20時更新！音声プラットフォーム「Voicy」で聞くことができます。移動中や家事の間などに3人のトークを楽しみましょう！', links: [{ label: 'Voicyで耳クラを聞く', href: 'https://voicy.jp/channel/935814' }] },
  '耳クラにお便りを送る': { text: '耳クラではふつメールを募集中！採用されたら番組内で読まれるかも！ぜひたくさんのメールをお待ちしています！', links: [{ label: 'ふつメールを送る', href: 'mailto:[mimi.kujira.gayagaya@gmail.com]' }] },
  '選手権に参加する': { text: 'お題に沿った動画を作ってきて、HR中のみんなからの投票で優勝を決める企画です。', pending: 'HR・募集先へのリンクを準備しています。' },
  '校長・教頭・先生の部屋を見る': { text: '校長・教頭・先生からのお知らせや投稿をまとめて確認できます。学校の今を知りたいときに覗いてみましょう。', links: [{ label: '先生たちの部屋一覧を見る', href: 'https://fants.jp/menu_categories/45' }] },
  'スタンプを作る': { text: '投稿のコメント欄で使えるオリジナルスタンプを作ってみましょう。PNGかJPG形式の画像を用意したら、専用のフォームで利用申請をします。FANTS内のコミュニケーションを盛り上げる素敵なスタンプをお待ちしております！', links: [{ label: 'スタンプ申請フォームを開く', href: 'https://fants.jp/menus/139' }] },
  'たむ小マップを見る': { text: '全国にいる児童のみなさんが運営するお店等のマップです。コロナ禍で大変な飲食店を少しでも救いたい！という校長の想いから生まれた企画です。近くの仲間を探したり、地域のつながりを知ったりできます。', links: [{ label: 'たむ小マップを見る', href: 'https://www.google.com/maps/d/u/0/edit?mid=1OwMIgipAgcB7Q-EtyzytfCdE6QhU-g0&ll=28.469945269154348%2C165.062585&z=4' }] }
};

const categoryInfo = {
  'section-1': ['01 まずは使い方を知りたい', '#0c7b7b', '#dff4f1'],
  'section-2': ['02 新しい仲間・友人を作りたい', '#e75b47', '#ffded8'],
  'section-3': ['03 何かに挑戦・活動したい', '#8661a8', '#eadff3'],
  'section-4': ['04 大人の小学校をもっと楽しみたい', '#b77800', '#ffedb9']
};

const cardLinks = new WeakMap();

document.querySelectorAll('.guide-link').forEach((card) => {
  const savedLinks = [...card.querySelectorAll('a[href]')].map((link) => ({ href: link.href, label: link.textContent.replace('↗', '').trim() }));
  const arrow = card.querySelector('.arrow');
  if (arrow) arrow.textContent = '＋';
  else card.insertAdjacentHTML('beforeend', '<span class="arrow" aria-hidden="true">＋</span>');
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.removeAttribute('target');
});

function openModal(card) {
  const title = card.querySelector('strong').textContent.trim();
  const detail = details[title] || { text: '詳しい内容を確認できます。' };
  const section = card.closest('.guide-section');
  const category = Object.entries(categoryInfo).find(([className]) => section.classList.contains(className))?.[1] || categoryInfo['section-1'];
  const uniqueLinks = cardLinks.get(card) || [];

  modal.style.setProperty('--modal-color', category[1]);
  modal.style.setProperty('--modal-tint', category[2]);
  categoryEl.textContent = category[0];
  titleEl.textContent = title;
  mediaEl.innerHTML = detail.video
    ? `<iframe src="${detail.video}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    : detail.image ? `<img src="${detail.image}" alt="${title}の手順図解">` : '';
  copyEl.innerHTML = `<p>${detail.text}</p>${detail.note ? `<p class="modal-note">${detail.note}</p>` : ''}${detail.pending ? `<p class="modal-note">${detail.pending}</p>` : ''}`;
  const modalLinks = detail.links || uniqueLinks;
  actionsEl.innerHTML = detail.pending ? '' : modalLinks.map((link, index) => `<a class="modal-button${index ? ' secondary' : ''}" href="${link.href}" target="_blank" rel="noopener">${link.label} ↗</a>`).join('');
  modal.showModal();
  document.body.classList.add('modal-open');
}

document.addEventListener('click', (event) => {
  const card = event.target.closest('.guide-link');
  if (!card) return;
  event.preventDefault();
  openModal(card);
});

document.addEventListener('keydown', (event) => {
  const card = event.target.closest?.('.guide-link');
  if (card && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    openModal(card);
  }
});

function closeModal() {
  modal.close();
  mediaEl.innerHTML = '';
  document.body.classList.remove('modal-open');
}

closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
modal.addEventListener('close', () => {
  mediaEl.innerHTML = '';
  document.body.classList.remove('modal-open');
});
