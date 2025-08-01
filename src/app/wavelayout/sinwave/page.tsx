import type { Metadata } from 'next';
import OscillationCanvas from './canvas';
import { InlineMath, BlockMath } from 'react-katex';

export const metadata: Metadata = {
  title: '正弦波 | Wave App by Wing',
  description: '波の中でも正弦波は，音波，電波，光など，様々な場所で観測されます．正弦波は，変化の仕方が正弦関数（三角比のサイン）で表されます．'
}

export default function 正弦波() {
  return(
    <>
      <OscillationCanvas />
      <h2>正弦波</h2>
      <p>波源が単振動をする場合，媒質の各点は波源よりも遅れて単振動するので，<strong>正弦波</strong>が生じる．各点における，元の位置からのズレは，<strong>変位</strong>という．</p>
      <h3>図について</h3>
      <p>横波の場合のモデル．この図では，角振動数と波の速さを変更することができ，波長は適切な値が設定されます．スライダを動かすことで，<InlineMath math='v=f \lambda' />についてよく分かるでしょう．</p>
      <h3>波の要素</h3>
      <ul>
        <li><strong>山</strong>：波形の最も高いところ</li>
        <li><strong>谷</strong>：波形の最も低いところ</li>
        <li><strong>振幅<InlineMath math='A' /></strong>：山の高さ・谷の深さ</li>
        <li><strong>波長<InlineMath math='\lambda' /></strong>：波一つ分の長さ．山と山の間など．</li>
        <li>波の<strong>速さ<InlineMath math='v' /></strong>：山や谷が進む速さを指す．</li>
        <li><strong>周期<InlineMath math='T' /></strong>：媒質の各点が１回振動するのにかかる時間</li>
        <li><strong>振動数<InlineMath math='f' /></strong>：１秒あたりに振動する回数</li>
      </ul>
      <p>これらの要素の関係式は，以下の通り．</p>
      <BlockMath math=' v = f \lambda' />
      <BlockMath math=' f = \frac{1}{T}' />
      <h3>正弦波の具体例</h3>
      <ul>
        <li><strong>音波</strong>：縦波だが，正弦波で表される．</li>
        <li><strong>電磁波</strong>：光（可視光），赤外線，電波など．</li>
      </ul>
      <h3>正弦波の式</h3>
      <p>
        波源は単振動しており，波は<InlineMath math='x'/>軸の正の向きに速さ<InlineMath math='v  \text{[m/s]}'/>で伝わると仮定する．<br />
        正弦波の振幅<InlineMath math='A \text{[m]}'/> ，周期<InlineMath math='T \text{[s]}' />，波長<InlineMath math='\lambda  \text{[m]}'/>とおく．<br />
        原点<InlineMath math='x=0' />にある波源の，時刻<InlineMath math='t  \text{[s]}' />での変位<InlineMath math='y  \text{[m]}'/>は，次のように表される．<br />
        <BlockMath math='y = A \sin \frac { 2 \pi } { T } t'/><br />
        ここで，位置<InlineMath math='x \text{[m]}'/>（点Pとする）にある媒質の，時刻<InlineMath math='t  \text{[s]}' />における変位<InlineMath math='y  \text{[m]}'/>を考える．<br />
        点Pに原点の振動が伝わるのにかかる時間<InlineMath math='t _ { 0 } \text{[s]}' />は，次のように表される．<br />
        <BlockMath math='t _ { 0 } = \frac { x } { v } \text{[s]}' /><br />
        したがって，時刻<InlineMath math='t \text{[s]}' />での点Pの変位<InlineMath math='y'/>は，時刻<InlineMath math='(t-t_{0}) \text{[s]}'/>での原点の変位と同じである．ゆえに，<br />
        <BlockMath math='y = A \sin \frac { 2 \pi } { T } ( t - t _ { 0 } ) = A \sin \frac { 2 \pi } { T } ( t - \frac { x } { v } )'/>
        ここで，<InlineMath math='v=\frac{\lambda}{T}'/>より，<strong>正弦波の式</strong>は次のようになる．
        <BlockMath math='y = A \sin 2 \pi ( \frac { t } { T } - \frac { x } { \lambda } )' />
      </p>
    </>
  )
}