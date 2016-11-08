/**
 * Created by khlee on 10/18/16.
 */


var title;
var text;
var similarity;
var swiftCode;
var javaCode;
var text0, text1, text2, text3, text4;


title = "Hello World"
text = "伝統的に、新しい言語で書く最初のプログラムは、「Hello, world!」です。Swift では 1 行で記述できます。"
    +"Javaでコードを書いたことがあれば、このシンタックスには馴染みがあるでしょう。Swift では、この 1 行が完全なプログラムです。"
    + "入出力や文字列操作のために別のライブラリをインポートする必要はありません。グローバルスコープで記述されたコードはプログラムのエントリーポイントとなり、"
    + "main() 関数は必要ありません。各ステートメントの末尾にセミコロンを置く必要もありません。"
    +"このツアーでは、Swift でコーディングし始めるための十分な情報と、様々なプログラミングタスクを達成する方法を示しています。"
similarity=""
swiftCode = `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token function">print</span>
            <span class="token punctuation">(</span>
            <span class="token string">"Hello World!"</span>
            <span class="token punctuation">)</span>

        </code>
    </pre>
`
javaCode = `
    <pre class="language-java">
        <code class="language-java">
            <span class="token function">System.out.println</span>
            <span class="token punctuation">(</span>
            <span class="token string">"Hello World!"</span>
            <span class="token punctuation">)</span>

        </code>
    </pre>
`

text0 = [title, similarity, text, swiftCode, javaCode]

title = "dummy"
similarity = "dummy"
text = "dummy"
swiftCode="dummy"
javaCode = "dummy"

text1 = [title, similarity, text, swiftCode, javaCode]

var allText=[text0, text1];