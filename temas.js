/* Contenido de la landing, un bloque por tema.
 *
 * La URL decide cual se muestra:  /pdf/?tema=order-blocks
 * Si el parametro falta o no existe, se usa TEMA_POR_DEFECTO.
 *
 * Para publicar un tema nuevo:
 *   1. copiar las 4 tarjetas a  assets/<slug>/x_card1..4.jpg
 *   2. agregar el bloque aca abajo
 *   3. agregar la fila del slug en la hoja de Google Sheets (ver docs/)
 * No hay que tocar index.html.
 *
 * Campos:
 *   titulo      dos lineas; la segunda va en teal (es el <span class="ac">)
 *   gancho      la frase de la tarjeta 1, lo primero que lee quien llega
 *   subgancho   una o dos lineas que rematan el gancho
 *   paginas     numero de paginas del PDF   -> tiene que coincidir con la tarjeta 4
 *   figuras     numero de figuras del PDF   -> idem
 *   puntos      los bullets de la tarjeta 4, tal cual
 *   indice      los capitulos del PDF, en japones y en orden
 */

const TEMA_POR_DEFECTO = 'order-blocks';

const TEMAS = {

  'order-blocks': {
    titulo: ['オーダーブロック', '完全ガイド'],
    gancho: 'ベアリッシュ・オーダーブロックは「陽線」です。',
    subgancho: '陰線で描いていたなら、それは間違いです。名前は色ではなく、価格を送る方向で決まります。',
    paginas: 32,
    figuras: 26,
    puntos: [
      '4つの価格レベルと、その使い分け',
      '<span class="en">EUR/JPY</span> 月足で、成功例も失敗例も',
      'よくある誤解を、7項目の表で整理',
    ],
    indice: [
      'オーダーブロックとは何か',
      '状況判断がすべて',
      'サポート／レジスタンスとして機能する OB',
      '4つの重要価格レベル',
      '実践 ― <span class="en">EUR/JPY</span> 月足の分析',
      'よくある誤解と注意点',
      'リスク管理とメンタル',
      'ICT は「手法」ではなく「概念」',
    ],
  },

  'cisd-mss': {
    titulo: ['CISD と MSS', '完全ガイド'],
    gancho: '「直近の高値を抜けた」＝ MSS ではない。',
    subgancho: 'ICT で最も多い誤解のひとつ。形が揃っていても、状況が伴わなければ MSS ではありません。',
    paginas: 34,
    figuras: 26,
    puntos: [
      'MSS と CISD の違いを、最後まで',
      '月足で裏を取り、下位足で確かめる手順',
      'エントリーまでを一本の流れで',
    ],
    indice: [
      'マーケットストラクチャーを読む',
      'MSS ― <span class="en">Market Structure Shift</span>',
      '抜けただけでは MSS ではない',
      '月足で裏を取る',
      '<span class="en">Change in State of Delivery</span>',
      'CISD と MSS はどう違うのか',
      '日足での実践',
      '下位足で確かめる',
      'エントリーまで',
      'ナラティブがすべて',
    ],
  },

  'breaker-block': {
    titulo: ['ブレイカーブロック', '完全ガイド'],
    gancho: 'ブレイカーブロックは「失敗したオーダーブロック」ではありません。',
    subgancho: '形が同じでも、状況が伴わなければブレイカーブロックではありません。',
    paginas: 51,
    figuras: 48,
    puntos: [
      'キーレベル・ターゲット・反転 ― 成立の三条件',
      '<span class="en">USD/JPY</span> とゴールド ― 実チャートの2ケース',
      '動画の内容を、テーマ別に再構成',
    ],
    indice: [
      '「失敗したオーダーブロック」ではない',
      'キーレベルとは何か',
      'ターゲットを把握する',
      '反転はキーレベルで起きる',
      'ブレイカーブロックの正体',
      '引き方',
      'エントリーと損切り',
      'ケース① <span class="en">USD/JPY</span>',
      'ケース② ゴールド',
      '大きな反転と、方向の中の「つなぎ」',
      'ブレイカーブロックの中を分ける',
      'ターゲットが左にないとき',
      '<span class="en">Reclaimed Block</span> と <span class="en">Time Distortion</span>',
    ],
  },

  'usdcad-1': {
    titulo: ['USD/CAD の分析', '事例研究 パート1'],
    gancho: 'チャートを開いて最初に探すのは、エントリーではない。',
    subgancho: 'ICT トレーダーが真っ先に探すのは、目立っているリクイディティ。どこへ向かっているのか分からなければ、何も使えません。',
    paginas: 41,
    figuras: 43,
    puntos: [
      '月足のレンジと 50% から組み立てる',
      '三つのキーレベルが重なるところ',
      '<span class="en">Propulsion Block</span> と <span class="en">Inversion FVG</span>',
    ],
    indice: [
      'この分析の見方',
      '月足 ― レンジと 50%',
      '三つのキーレベルが重なるところ',
      'まだ教えていなかった話',
      'コンソリデーションを四つに分ける',
      'オーダーブロックの見分け方',
      '週足 ― <span class="en">Propulsion Block</span>',
      '「過去のチャートばかりだ」と言われて',
      '日足 ― <span class="en">Breaker Block</span>',
      '<span class="en">Inversion Fair Value Gap</span>',
      '来週に何を期待するか',
      '<span class="en">CRT</span> について',
      '<span class="en">Implied Fair Value Gap</span>',
    ],
  },

  'usdcad-2': {
    titulo: ['USD/CAD の分析', '事例研究 パート2'],
    gancho: '「売り手が強いから下がった」わけではない。',
    subgancho: 'そこに Sellside Liquidity とオーダーブロックがあったから、アルゴリズムがそこで反応した。買い手と売り手は、関係ありません。',
    paginas: 37,
    figuras: 40,
    puntos: [
      '4時間足で組み立てる一つのトレード',
      'ロンドンキルゾンの騙しと、手を止める場所',
      '金曜日の <span class="en">OTE</span> と、どこまで上がるかの計算',
    ],
    indice: [
      'パート1の続き',
      '4時間足 ― <span class="en">Inversion FVG</span> の正しい使い方',
      '4時間足で組み立てる一つのトレード',
      '1時間足 ― 上位足のレベルは消さない',
      'アルゴリズムの一日',
      '水曜日 ― 15分足のトレード',
      'ロンドンクローズで手を止める',
      '木曜日 ― ロンドンキルゾンの騙し',
      'キルゾンの高値と安値はターゲットになる',
      'ディーリングレンジを四つに分ける',
      '金曜日 ― <span class="en">OTE</span>',
      'どこまで上がるのかを計算する',
    ],
  },

  'eurusd-intermedio': {
    titulo: ['EURUSD の分析', '事例研究 ― 中級レベル'],
    gancho: 'ICT で一番重要なのは、オーダーブロックでも Fair Value Gap でもない。',
    subgancho: '一番重要なのは、時間。値動きが、何時に、何をやっているのか。それが分からなければ、いくら PD Array を勉強しても使えません。',
    paginas: 53,
    figuras: 51,
    puntos: [
      '3ヶ月足から1分足まで ― 一本のトレードになるまでの全部',
      '<span class="en">Daily Power of 3</span>・<span class="en">Time & Price</span>・プロジェクション',
      '同じトレードで、損切りをどこに置くか ― リスクリワードの違い',
    ],
    indice: [
      'この分析の見方',
      '3ヶ月足 ― 大きなリクイディティと <span class="en">Change in the State of Delivery</span>',
      '月足 ― オーダーブロックが重なるところ',
      '週足 ― わざと作られたリクイディティ',
      '日足 ― 週末に立てる二つのシナリオ',
      '4時間足 ― <span class="en">Week Open</span> と、重要になる <span class="en">Fair Value Gap</span>',
      '5分足 ― <span class="en">Midnight Open</span> からの一日',
      '<span class="en">Daily Power of 3</span> と <span class="en">Daily Profile</span>',
      '<span class="en">Time & Price</span> ― 一番重要なのは、時間',
      '15分足 ― オーダーブロックと <span class="en">Change in the State of Delivery</span>',
      'プロジェクション ― ブレイカーブロックと <span class="en">Midnight Opening Range</span>',
      '5分足 ― <span class="en">Balanced Price Range</span> と <span class="en">Breakaway Gap</span>',
      '1分足 ― 損切りは、理論ではなく現実で',
    ],
  },

  'time-and-price': {
    titulo: ['Time & Price', 'Power of 3 完全ガイド'],
    gancho: '「プレミアムからディスカウントに戻る」― その形だけでは無意味。',
    subgancho: 'こうなりそうで、ならないとき、だいたい時間が関わっていません。何時に、何曜日に、どのセッションで。',
    paginas: 53,
    figuras: 53,
    puntos: [
      '一日を三つのキルゾンで読む ― <span class="en">Accumulation</span>／<span class="en">Manipulation</span>／<span class="en">Distribution</span>',
      '図解21点で仕組みを、実チャート32点で一つのトレードに',
      '<span class="en">Midnight Open</span>・<span class="en">Daily Power of 3</span>・<span class="en">Balanced Price Range</span>',
    ],
    indice: [
      'この動画の狙い ― <span class="en">Time & Price</span> を <span class="en">Power of 3</span> で合わせる',
      'プライス ― リクイディティから、リクイディティへ',
      '直接には行かない ― 燃料はリクイディティ',
      'レンジ ― プレミアムから、ディスカウントへ',
      'タイム ― 時間がないと、値動きは無意味',
      '実チャート ― 日足と週足、反転しているかどうか',
      '4時間足 ― 一つ目と二つ目の反転の印',
      '<span class="en">Balanced Price Range</span> ― 戻るなら、どこまで',
      '1時間足と15分足 ― レンジを取り直す',
      '15分足 ― <span class="en">Time & Price</span>、そしてブレイカーブロック',
      '1分足 ― スキャルピング',
      '一日の最高値 ― ブレイカーブロックと <span class="en">London Protraction</span>',
    ],
  },

};
