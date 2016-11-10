/**
 * Created by khlee on 10/18/16.
 */


var title;
var text;
var similarity;
var element;
var allText = [];


title = "Hello World"
similarity = "Swiftの出力関数である <code>print()</code> は Java の <code>System.out.println()</code> に相当し、使い方も同じです。<br>"
    + "ですが、Swift では文字列に変数を挿入や追加がもっと簡単にできます。"
text = "伝統的に、新しい言語で書く最初のプログラムは、「Hello, world!」です。Swift では 1 行で記述できます。<br>"
    + "Javaでコードを書いたことがあれば、このシンタックスには馴染みがあるでしょう。Swift では、この 1 行が完全なプログラムです。<br>"
    + "print関数に文字列のパラメータを入れることで出力ができます。"
    + `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token function">print(</span>
            <span class="token string">"Hello World!"</span>
            <span class="token function">)</span>
        </code>
    </pre>
    `
    + "Javaやほかのプログラミング言語では<code>＋</code>オペレーターで文字列とほかのデータタイプとの操作を行います。<br>"
    + "整数を文字列の後ろに追加するなどの時は、整数を文字列に変換する必要があります。ですが、Swiftでは、その時変換操作は必要ありません。<br>"
    + "変数などを <code>\\( )</code> オペレーターでラッピングする方法で、様々なデータタイプの変数を文字列の中に入れられます。<br>"
    + `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            hello
            <span class="token operator">=</span>
            <span class="token string">"Hello"</span>
            <br>
            <span class="token function">print(</span>
            <span class="token string">"</span>
            <span class="token punctuation">\\(</span>
            <span class="token variable">hello</span>
            <span class="token punctuation">)</span>
            <span class="token string">World!"</span>
            <span class="token function">)</span>
            <span class="token comment">//Hello World!を出力</span>
        </code>
    </pre>
    `
    + "このコードをJavaで実現すると："
    + `
    <pre class="language-java">
        <code class="language-java">
            <span class="token keyword">final</span>
            String hello
            <span class="token operator">=</span>
            <span class="token string">"Hello"</span>
            ;
            <br>
            <span class="token function">System.out.println(</span>
            hello
            <span class="token operator">+</span>
            <span class="token string">"World!"</span>
            <span class="token function">)</span>
            ;
        </code>
    </pre>
    `
    + "<hr>もう一つの例を見てみましょう。"
    + `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            age
            <span class="token operator">=</span>
            <span class="token number">18</span>
            <br>
            <span class="token function">print(</span>
            <span class="token string">"I am </span>
            <span class="token punctuation">\\(</span>
            age
            <span class="token punctuation">)</span>
            <span class="token string">years old."</span>
            <span class="token function">)</span>
            <span class="token comment">//I am 18 years oldを出力"</span>
        </code>
    </pre>
    `
    + "このプログラムは年齢の定数を定義し、文字列に変換して出力します。同じプログラムをJavaで書いてみると："
    + `
    <pre class="language-java">
        <code class="language-java">
            <span class="token keyword">final</span>
            int age
            <span class="token operator">=</span>
            <span class="token number">18</span>
            ;
            <br>
            <span class="token function">System.out.println(</span>
            <span class="token string">"I am "</span>
            <span class="token operator">+</span>
            <span class="token function">String.valueOf(</span>
            age
            <span class="token function">)</span>
            <span class="token operator">+</span>
            <span class="token string">"years old."</span>
            <span class="token function">)</span>
            <span class="token comment">//I am 18 years oldを出力"</span>
        </code>
    </pre>
    `
    + "Javaで変換と追加が多い場合、コードが長くなり、読みづらくなります。それに比べて、明らかにSwiftの操作方法がもっと簡単だと言えるでしょう。"

element = [title, similarity, text]
allText.push(element);


title = "定数と変数の宣言"
similarity = "<code>let</code>はJavaの<code>final</code>に相当し、<code>var</code>はJavaの変数定義に相当します。"
text = "定数と変数は、使用する前に宣言しておく必要があります。定数は、値を設定した後に変更することはできません。変数は、値をいつでも変更できます。<br>"
    + "<code>let</code> キーワードで定数を宣言し、<code>var</code> キーワードで変数を宣言します。"
    + `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            immutable
            <span class="token operator">=</span>
            <span class="token string">"You shall not change me"</span>
            <br>
            immutable
            <span class="token operator">=</span>
            <span class="token string">"I can not be changed!"</span>
            <span class="token comment">//compile error</span>
        </code>
    </pre>
    `
    + "定数は変更できないため、他の値を与えようとした時にコンパイルエラーになるます。<br>"
    + "簡単に言うと、Javaの<code>final</code>キーワードを<code>let</code>に変えるとSwiftの変数定義になります。"
    + `
    <pre class="language-java">
        <code class="language-java">
            <span class="token keyword">final</span>
            String immutable
            <span class="token operator">=</span>
            <span class="token string">"You shall not change me"</span>
            ;
            <br>
            immutable
            <span class="token operator">=</span>
            <span class="token string">"I can not be changed!"</span>
            ;
            <span class="token comment">//compile error</span>
        </code>
    </pre>
    `
    + `<hr>
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            mutable
            <span class="token operator">=</span>
            <span class="token string">"I am a baby"</span>
            <br>
            mutable
            <span class="token operator">=</span>
            <span class="token string">"I grew up to a man!"</span>
            <span class="token comment">//mutableは"I grew up to a man!"に変更</span>
        </code>
    </pre>
    `
    + "簡単に言うと、Swiftの変数定義はJavaの変数定義に<code>var</code>キーワードを追加したものとも言えます。<br>"
    + "上のコードをJavaで書くと以下になります。"
    + `
    <pre class="language-java">
        <code class="language-java">
            String mutable
            <span class="token operator">=</span>
            <span class="token string">"I am a baby"</span>
            ;
            <br>
            mutable
            <span class="token operator">=</span>
            <span class="token string">"I grew up to a man!"</span>
            ;
            <span class="token comment">//mutableは"I grew up to a man!"に変更</span>
        </code>
    </pre>
    `


element = [title, similarity, text]
allText.push(element);

title = "型推論"
similarity = "この部分はSwift特有な部分です。"
text = "Swift は、型安全（タイプセーフ）な言語です。タイプセーフな言語は、コードが扱う値の型が明らかで、String を期待するコード部分に誤って Int を渡すようなことができません。"
    + "Swift はタイプセーフであるため、コードをコンパイルする時に型をチェックし、適合しない型にエラーとして印を付けます。"
    + "これにより、開発の早い段階でエラーを発見し、修正できるようになります。"
    + "以下のコードを見ると、型は全部宣言してありません。<br>"
    + `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            anInt
            <span class="token operator">=</span>
            <span class="token number">1337</span>
            <br>
            <span class="token keyword">let</span>
            aDouble
            <span class="token operator">=</span>
            <span class="token double">3.14</span>
            <br>
            <span class="token keyword">let</span>
            aString
            <span class="token operator">=</span>
            <span class="token string">"Hello, everyone!"</span>
            <br>
            <span class="token keyword">let</span>
            aFloat
            <span class="token operator">=</span>
            <span class="token function">Float(</span>
            <span class="token number">3.14</span>
            <span class="token function">)</span>
        </code>
    </pre>
    `
    + "もちろん、型を宣言もできます。"
    + `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            anInt
            <span class="token operator">:</span>
            Int
            <span class="token operator">=</span>
            <span class="token number">1337</span>
        </code>
    </pre>
    `
    + "ですが、<code>:String</code>のような型宣言をしなくても、Swiftはコードをコンパイルする時に値を検査して、"
    + "コンパイラが自動的に式の型を推論できるようにします" +
    "Swift type inference system is very strong. So most of the time, you don't need to specify the type. "

element = [title, similarity, text]
allText.push(element);

title = "型キャスト"
similarity = "この部分はSwift特有な部分です。"
text = "Swiftはタイプセーフな言語です。" +
    "if you want to convert one value to another, you need to be specific. "
element = [title, similarity, text]
allText.push(element)

title="optional value"
similarity="Swifts way of making you think about missing values"
text="Who loves the Null Pointer Exception? Nobody!" +
    "This is the swifts way to treats the values that might be there, or might not be there." +
    "So, that's the Optional Value. In this case, I have optional value with type String." +
    "And you see that, the playground automatically marks that <code>nil</code>" +
    "nil is the same as <code>null</code> in java, but the exception is that, nil can only happen when you have an optional value" +
    "So, you can never assign nil to anything else but an optional value." +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            epicOptionalIsEpic
            <span class="token operator">:</span>
            String?
            <span class="token comment">//nil</span>
            <br>
            <span class="token function">print(</span>
            epicOptionalIsEpic
            <span class="token function">)</span>
            <span class="token comment">//"nil"</span>
        </code>
    </pre>
    `+
    "Now, let's assign a value to the epicOptionalIsEpic." +
    `
    <pre class="language-swift">
        <code class="language-swift">
            epicOptionalIsEpic
            <span class="token operator">=</span>
            <span class="token string">"epic"</span>
            <br>
            <span class="token function">print(</span>
            epicOptionalIsEpic
            <span class="token function">)</span>
            <span class="token comment">//"Optional(epic)"</span>
        </code>
    </pre>
    `+
    "I didn't wrap the <code>epic</code>. So it's depends to the language. The language will help me whenever I need an optional." +
    "It just allow me to just put that type inside that optional. I don't need to wrap anything." +
    "As you can see, I am just using the String literal. But I can put it to an optional." +
    "Now, what does't work, as I said, now I have non-optional, and I am trying to stick nil in there." +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            nonOptional
            <span class="token operator">:</span>
            String
            <span class="token operator">=</span>
            <span class="token symbol">nil</span>
            <span class="token comment">//compile error</span>
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title="Comments"
similarity = "SAME AS JAVA"
text = "single line comments<br>multiline comments"
element = [title, similarity, text]
allText.push(element)

title="演算子"
similarity="operators behaving exactly the same as in Java"
text="The first things are arithmetic operators. Also the compound assignment as well. " +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            plus
            <span class="token operator">=</span>
            <span class="token number">13</span>
            <span class="token operator">+</span>
            <span class="token number">37</span>
            <br>
            <span class="token keyword">var</span>
            minus
            <span class="token operator">=</span>
            <span class="token number">25</span>
            <span class="token operator">-</span>
            <span class="token number">7</span>
            <br>
            <span class="token keyword">var</span>
            times
            <span class="token operator">=</span>
            <span class="token number">3.14</span>
            <span class="token operator">*</span>
            <span class="token number">1.618</span>
            <br>
            <span class="token keyword">var</span>
            devidedBy
            <span class="token operator">=</span>
            <span class="token number">15.0</span>
            <span class="token operator">/</span>
            <span class="token number">5</span>
            <br>
            <span class="token keyword">let</span>
            remainder
            <span class="token operator">=</span>
            <span class="token number">8</span>
            <span class="token operator">%</span>
            <span class="token number">5</span>
            <br>
            plus
            <span class="token operator">+=</span>
            <span class="token number">5</span>
            <br>
            minus
            <span class="token operator">-=</span>
            <span class="token number">4</span>
            <br>
            times
            <span class="token operator">*=</span>
            <span class="token number">9</span>
            <br>
            devidedBy
            <span class="token operator">/=</span>
            <span class="token number">2</span>
            <br>
            <span class="token keyword">let</span>
            negate
            <span class="token operator">=</span>
            -plus
        </code>
    </pre>`

element=[title, similarity, text]
allText.push(element);

    title="論理演算子"
    similarity="operators behaving exactly the same as in Java"
    text =
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            equals
            <span class="token operator">=</span>
            <span class="token number">5</span>
            <span class="token operator">==</span>
            <span class="token number">6</span>
            <br>
            <span class="token keyword">let</span>
            nonEquals
            <span class="token operator">=</span>
            <span class="token number">5</span>
            <span class="token operator">!=</span>
            <span class="token number">6</span>
            <br>
            <span class="token keyword">let</span>
            greaterThan
            <span class="token operator">=</span>
            <span class="token number">5</span>
            <span class="token operator">></span>
            <span class="token number">6</span>
            <br>
            <span class="token keyword">let</span>
            lesserThanOrEqual
            <span class="token operator">=</span>
            <span class="token number">5</span>
            <span class="token operator"><=</span>
            <span class="token number">6</span>
            <br>
            <span class="token keyword">let</span>
            result
            <span class="token operator">=</span>
            <span class="token number">5</span>
            <span class="token operator">></span>
            <span class="token number">6</span>
            <span class="token operator">?</span>
            <span class="token number">5</span>
            <span class="token operator">:</span>
            <span class="token number">6</span>
            <br>
        </code>
    </pre>
    `+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            or
            <span class="token operator">=</span>
            notEquals
            <span class="token operator">||</span>
            equals
            <br>
            <span class="token keyword">let</span>
            and
            <span class="token operator">=</span>
            notEquals
            <span class="token operator">&&</span>
            equals
            <br>
            <span class="token keyword">let</span>
            not
            <span class="token operator">=</span>
            !equals
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title="Swift独自の演算子：<code>??</code>"
similarity = "only in swift"
text="As you can see, this operator works with optional value. This operator basically says, if you have an optional value," +
    "but that optional does not have any value inside of it, then I am gonna return a default value. So I have to define an" +
    "optional value and a default value stick to it. So in this case, I set the optional value as nil, so the valueOrDefault becomes default." +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            optional
            <span class="token operator">:</span>
            String?
            <span class="token operator">=</span>
            <span class="token symbol">nil</span>
            <br>
            <span class="token keyword">var</span>
            valueOrDefault
            <span class="token operator">=</span>
            optional
            <span class="token operator">??</span>
            <span class="token string">"default"</span>
        </code>
    </pre>
    `+
    "if I change the value to Non default for example, Obviously, it's gonna print out Non default." +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            optional
            <span class="token operator">:</span>
            String?
            <span class="token operator">=</span>
            <span class="token string">"Non default"</span>
            <br>
            <span class="token keyword">var</span>
            valueOrDefault
            <span class="token operator">=</span>
            optional
            <span class="token operator">??</span>
            <span class="token string">"default"</span>
        </code>
    </pre>
    `+
    "As you can see, I have unwrapped now, I have a result as non optional value. Once you get out of the second statement," +
    "your valueOrDefault actually is a non optional value. So of course you can not read or work with optional values once you " +
    "want to use them, so you will need to unwrap them. And as you will see there are many ways of doing this."
element=[title, similarity, text]
allText.push(element)

title="範囲演算子"
similarity="Only in Swift"
text="There are two types of range operator, closed range operator and half open operator" +
    "So the first version is 1 and 5 inclusive, so you get 1,2,3 and 4, 5. The half open operator access to 1,2,3 and 4." +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            closedRange
            <span class="token operator">=</span>
            <span class="token number">1</span>
            <span class="token operator">...</span>
            <span class="token number">5</span>
            <br>
            <span class="token keyword">var</span>
            halfOpen
            <span class="token operator">=</span>
            <span class="token number">1</span>
            <span class="token operator">..<</span>
            <span class="token number">5</span>
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title = "制御フロー　- for-in"
similarity = "for-inループはJavaのenhanced for loopに似ています。"
text = "数値の範囲や、配列内の値、文字列内の文字のようなシーケンスを繰り返し処理するために、for–in ループを使用します。"
    + "次の例は、5 の段の初めのいくつかを出力しています。"
    + `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">for</span>
            <span class="token variable">index</span>
            <span class="token keyword">in</span>
            <span class="token number">1</span>
            <span class="token operator">...</span>
            <span class="token number">5</span>
            <span class="token punctuation">{</span>
            <br>
            <span class="token function">print(</span>
            <span class="token string">"</span>
            <span class="token punctuation">\\(</span>
            index
            <span class="token punctuation">)</span>
            <span class="token string">times 5 is </span>
            <span class="token punctuation">\\(</span>
            index
            <span class="token operator">*</span>
            <span class="token number">5</span>
            <span class="token punctuation">)</span>
            <span class="token string">"</span>
            <span class="token function">)</span>
        </code>
    </pre>
    `

element = [title, similarity, text]
allText.push(element);