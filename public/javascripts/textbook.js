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
similarity = "not yet decided"
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

title="if文"
similarity = "same as java, just no parentheses"
text="Control flow in Swift will allow you do if, else if and else blocks of course. So the difference is you don't need " +
    "parentheses around your condition." +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            a
            <span class="token operator">=</span>
            <span class="token number">1</span>
            <br>
            <span class="token keyword">if</span>
            a
            <span class="token operator">%</span>
            <span class="token number">2</span>
            <span class="token operator">==</span>
            <span class="token number">0</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"Even number"</span>
            <span class="token function">)</span>
            <br>
            }
            <span class="token keyword">else if</span>
            a
            <span class="token operator">%</span>
            <span class="token number">3</span>
            <span class="token operator">==</span>
            <span class="token number">0</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"Divisable by three"</span>
            <span class="token function">)</span>
            <br>
            }
            <span class="token keyword">else</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"Odd number, not divisible by three"</span>
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `
    +"So no parentheses, but the basic structure is similar to java, no specials."
element=[title, similarity, text]
allText.push(element)

title="if with optional binding"
similarity="Only swift has it"
text="What if let you do? if let you do what called optional binding." +
    "So again, you are working with these optional values. So toBeOrNotToBe is an optional string." +
    "and in this case, I put a value in it. so I am trying to unwrap optional value to non optional value by using if let." +
    "if it succeeds, enter to if branch, if it doesn't succeeds, I enter to else branch." +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            toBeOrNotToBe
            <span class="token operator">:</span>
            String?
            <span class="token operator">=</span>
            <span class="token string">"That is the question"</span>
            <br>
            <span class="token keyword">if</span>
            <span class="token keyword">let</span>
            toBe
            <span class="token operator">=</span>
            toBeOrNotToBe {
            <br>
            &emsp;
            <span class="token function">print(</span>
            toBe
            <span class="token function">)</span>
            <br>
            }
            <span class="token keyword">else</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"I am not, therefore I don't think?"</span>
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `+
    "If I change the value to nil, or basically I don't put anything to it, now it prints out" +
    "I am not, therefore I don't think?"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            toBeOrNotToBe
            <span class="token operator">:</span>
            String?
            <span class="token operator">=</span>
            <span class="token symbol">nil</span>
            <br>
            <span class="token keyword">if</span>
            <span class="token keyword">let</span>
            toBe
            <span class="token operator">=</span>
            toBeOrNotToBe {
            <br>
            &emsp;
            <span class="token function">print(</span>
            toBe
            <span class="token function">)</span>
            <br>
            }
            <span class="token keyword">else</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"I am not, therefore I don't think?"</span>
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title="Unwrap with !"
similarity="Only Swift has it"
text="There are many different ways of unwrapping, for example, you can just do unwrap with a ! . " +
    "We call it Bang, because it's a dangerous operation. When that fails, basically your program crushes."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            toBeOrNotToBe
            <span class="token operator">:</span>
            String?
            <span class="token operator">=</span>
            <span class="token symbol">nil</span>
            <br>
            <span class="token keyword">let</span>
            toBe
            <span class="token operator">=</span>
            toBeOrNotToBe!
            <span class="token comment">//error: Execution was interrupted</span>
        </code>
    </pre>
    `+
    "if the optional value is nil, you will see there is an error. Execution was interrupted. So basically this is a crush." +
    "So the bang operator, only use it when you know for sure that your optional can be unwrapped."
element=[title, similarity, text]
allText.push(element)

title = "for-in loop"
similarity = "for-inループはJavaのenhanced for loopに似ています。"
text = "数値の範囲や、配列内の値、文字列内の文字のようなシーケンスを繰り返し処理するために、for–in ループを使用します。"+
    "次の例は、5 の段の初めのいくつかを出力しています。" +
    "Basically, for-in loop can take any sequence. So a range is a sequence, so I can loop through 1 to 10." +
    "first of all, i is a constant, i is let. you can also iterate over a string, that's a sequence too."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">for</span>
            i
            <span class="token keyword">in</span>
            <span class="token number">1</span>
            <span class="token operator">...</span>
            <span class="token number">10</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"</span>
            \\(i)
            <span class="token string">one thousand"</span>
            <span class="token function">)</span>
            <br>
            }
            <span class="token keyword">for</span>
            character
            <span class="token keyword">in</span>
            <span class="token string">"The Swift Brown Fox"</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            character
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `+
    `
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

title="while loop"
similarity="same as in Java, just don't need semi colons"
text=""+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            i
            <span class="token operator">=</span>
            <span class="token number">10</span>
            <br>
            <span class="token keyword">while</span>
            i
            <span class="token operator">></span>
            <span class="token number">0</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"</span>
            \\(i)
            <span class="token string">one thousand"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            i
            <span class="token operator">=</span>
            i
            <span class="token operator"> - </span>
            <span class="token number">1</span>
            <br>
            }
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title="repeat-while"
similarity="same as in Java, no semi colons, different keyword. you only need to put the semi colons when you want put multiple statement in one line."
text=""+`
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            i
            <span class="token operator">=</span>
            <span class="token number">10</span>
            <br>
            <span class="token keyword">repeat</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"</span>
            \\(i)
            <span class="token string">one thousand"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            i
            <span class="token operator">=</span>
            i
            <span class="token operator"> - </span>
            <span class="token number">1</span>
            <br>
            }
            <span class="token keyword">while</span>
            i
            <span class="token operator">></span>
            <span class="token number">0</span>
        </code>
    </pre>
            
`
element=[title, similarity, text]
allText.push(element)

title=""
similarity=""
text="Let's look at something very powerful in Swift.that's the switch statement.First example, I ahve a lightBylb" +
    "and I put it to on, and basically I want to check the state of that lightbulb in my switch statement. So the first expression says" +
    "case on, so basically I can match a string. So, when it's on, I can println it's on,  when it's off" +
    "Well, it's dark in here, and if it's something else, it's not my light bulb."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            lightBulb
            <span class="token operator">=</span>
            <span class="token string">"n"</span>
            <br>
            <span class="token keyword">switch</span>
            lightBulb {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"on"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"The lights are on!"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"off"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"It's dark in here!"</span>
            <br>
            &emsp;
            <span class="token keyword">default:</span>
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"We're in the twilight zone"</span>
            <span class="token function">)</span>
            }
            <span class="token comment">//print out "The lights are on!"</span>
        </code>
    </pre>
    `

element=[title, similarity, text]
allText.push(element)

title="switch statement-Needs to be exhaustive"
similarity="totally different"
text="The first thing, is see? I don't have any breaks anywhere. But it still doesn't fallthrough like in Java. " +
    "if you wanna fall through, you have to opted in.And I like it, because in Java, you always have to put break. " +
    "So inside the case statement, you automatically fall through. Another thing is it needs to be exhaustie." +
    "you may get a compiler error in the code below basically says it's not exhaustive." +
    "So it says, you didn't cover all your basis. So you need that default statement."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            lightBulb
            <span class="token operator">=</span>
            <span class="token string">"n"</span>
            <br>
            <span class="token keyword">switch</span>
            lightBulb {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"on"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"The lights are on!"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"off"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"It's dark in here!"</span>
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `+
    "So you have to add a default to avoid the error."

element=[title, similarity, text]
allText.push(element)

title="switch statement- no implicit fall through"
similarity="totally different"
text= "Another thing is, here I wanna fall through, that dosn't work."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            lightBulb
            <span class="token operator">=</span>
            <span class="token string">"n"</span>
            <br>
            <span class="token keyword">switch</span>
            lightBulb {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"on"</span>
            :
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"off"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"That's a well behaving light"</span>
            <br>
            &emsp;
            <span class="token keyword">default:</span>
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"We're in the twilight zone"</span>
            <span class="token function">)</span>
            <br>
            }
            <span class="token comment">//compile error</span>
        </code>
    </pre>
    `+
    "So if you wanna fall through, you need to specify fallthrough , so this is the keyword specific for swift." +
    "Now the error goes away and prints out That's a well behaving light"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            lightBulb
            <span class="token operator">=</span>
            <span class="token string">"n"</span>
            <br>
            <span class="token keyword">switch</span>
            lightBulb {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"on"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"Oh my eyes!"</span>
            <span class="token function">)</span>
            <span class="token keyword">fallthrough</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"off"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"That's a well behaving light"</span>
            <br>
            &emsp;
            <span class="token keyword">default:</span>
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"We're in the twilight zone"</span>
            <span class="token function">)</span>
            <br>
            }
            <span class="token comment">//compile error</span>
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title="switch statement-range matching"
similarity="totally different"
text="Now, if I wanna do something in that on condition, now the powerful thing is you can do the range matching." +
    "So I have integers attendeesAtDevoxx which is around 3500, and I check in my switch statement, what that number is," +
    "and if it's between a value, you can use a range matching. So in this case, I check if it's between 0 to 10, 10 to 99 and so on." +
    "So I print out Devoxx has thousands of attendees."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            attendeesAtDevoxx
            <span class="token operator">=</span>
            <span class="token number">3500</span>
            <br>
            <span class="language-swift">var</span>
            candinality
            <span class="token operator">:</span>
            <span class="token string">String</span>
            <br>
            <span class="token keyword">switch</span>
            attendeesAtDevoxx {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token number">0</span>
            ...
            <span class="token number">10</span>
            :
            <br>
            &emsp;&emsp;
            candinality
            <span class="token operator">=</span>
            <span class="token string">"a few"</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token number">10</span>
            ...
            <span class="token number">99</span>
            :
            <br>
            &emsp;&emsp;
            candinality
            <span class="token operator">=</span>
            <span class="token string">"tens of"</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token number">100</span>
            ...
            <span class="token number">999</span>
            :
            <br>
            &emsp;&emsp;
            candinality
            <span class="token operator">=</span>
            <span class="token string">"hundreds of"</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token number">1000</span>
            ...
            <span class="token number">999999</span>
            :
            <br>
            &emsp;&emsp;
            cardinality
            <span class="token operator">=</span>
            <span class="token string">"thousands of"</span>
            <br>
            &emsp;
            <span class="token keyword">default</span>
            :
            <br>
            &emsp;&emsp;
            cardinality
            <span class="token operator">=</span>
            <span class="token string">"xmillions of"</span>
            <br>
            }
            <br>
            <span class="token function">print(</span>
            <span class="token string">"Devoxx has</span>
            \\(cardinality)
            <span class="token string">attendees!"</span>
            <span class="token function">)</span>
        </code>
    </pre>
    `+
    "If the attendeesAtDevoxx is set as 10, it only prints out a few. The first case already succeeds, " +
    "so it doesn't go to the second case."+
    "POP UP QUESTION: what if I add the fallthrough in the first case statement"
element=[title, similarity, text]
allText.push(element)

title="switch statement-tuple matching"
similarity="totally different"
text="Another powerful thing is you can do the tuple matching. " +
    "So let's assume I have a variable somethere which returns the httpStatus tuple. " +
    "So I can have a status and the message that comes with that status inside the tuple. " +
    "So in this case, 402 means the payment required. So the httpStatus I can switch as well." +
    "So as you can see, I can do a lot of matching there. So the first case is, it it's 200 and" +
    "the message says OK, then I will just print out Everything is just fine then this switch statement is over." +
    "if it's still 200, but it's not ok, then I still can check for 200 then say, everything is fine" +
    "then give the message. Then I need to bind whatever the second value in my tuple is to that message." +
    "then I can do some range matching as well. on the first value in my tuple so if it's between " +
    "500 and 600 exclusive, then it will print out the server made a mistake. And if it's none of the above," +
    "I am not interested in the status code anymore, so I can put that in the underscore, then I show the message."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            httpStatus
            <span class="token operator">=</span>
            (
            <span class="token number">402</span>
            ,
            <span class="token string">"Payment required"</span>
            )
            <br>
            <span class="token keyword">switch</span>
            httpStatus {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            (
            <span class="token number">200</span>
            ,
            <span class="token string">"OK"</span>
            ):
            <br>
            &emsp;&emsp;
            <span class="function">print(</span>
            <span class="token string">"Everything is just fine!"</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            (
            <span class="token number">200</span>
            ,
            <span class="token keyword">let</span>
            message ):
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"Everything is fine:</span>
            \\(message)
            <span class="token string">"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            <span class="token number">500</span>
            ..<
            <span class="token number">600</span>
            ,
            <span class="token keyword">_</span>
            ):
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"The server made a mistake"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            (
            <span class="token keyword">_</span>
            ,
            <span class="token keyword">let</span>
            message ):
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            message
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `+
    "So in this case, it's 402, So I get the payment required."
element=[title, similarity, text]
allText.push(element)

title="switch statement-guard with<code>where</code>"
similarity="totally different, only in Swift"
text="The lightBulbAndSwitch basically are on and on, off and off, on and off, off and on." +
    "So at first, I wannt do the case matching. So I can say let bulb and button be avaliable in this case statement" +
    "and what I can do is, I can guard it with where, say wherever bulb and button are equal to each other." +
    "So if the bulb and button are both on or both off, then everything seems fine." +
    "And now we know, otherwise, if the light bulb if off, then the switch must on because it's not equal anymore." +
    "or another value by the way. But then the bulb is either broken or, and in all other cases will print" +
    "The bulb is not controlled by the switch. And in this case, I set the lightBulbAndSwitch as on and off, " +
    "So it's gonna print the bulb is not controlled by the switch."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            lightBulbAndSwitch
            <span class="token operator">=</span>
            (
            <span class="token string">"on"</span>
            ,
            <span class="token string">"off"</span>
            <br>
            <span class="token keyword">switch</span>
            lightBulbAndSwitch {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token keyword">let</span>
            (bulb, button)
            <span class="token keyword">where</span>
            bulb
            <span class="token operator">==</span>
            button:
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"Everything seems fine!"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            (
            <span class="token string">"off"</span>
            ,
            <span class="token keyword">_</span>
            ):
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"The bulb is either broken, or"</span>
            <span class="token function">)</span>
            <br>
            &emsp;&emsp;
            <span class="token keyword">fallthrough</span>
            <br>
            &emsp;
            <span class="token keyword">default</span>
            :
            <br>
            <span class="token function">print(</span>
            <span class="token string">"The bulb is not controlled by the switch"</span>
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title="array"
similarity=""
text="Swift have two basic collection types: the array and the dictionary. " +
    "If I have to compare with Java, I will stick to the array list in Java more or less. And Dictionary with the map. " +
    "As you can see, there is a short syntax to define arrays. So now I get the array of strings." +
    "To define that, I can just use the square brackets and every elements with the comma. " +
    "So it's comma seperator for list of vaules. No surprises there. " +
    "As you can see, I can have both mutable and immutable variables. And what that means is" +
    "now my mutableMovies I can change. I can also reassign the mutableMovies to some other array, " +
    "but I can manipulate the contents of array as well. While with the let, " +
    "neither of those options are avaliable. So the both the value itself is immutable, " +
    "you cannot reassign, but you can not contents of that array either." +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            movies
            <span class="token operator">=</span>
            [
            <span class="token string">"Pulp Fiction"</span>
            ,
            <span class="token string">"Reservoir Dogs"</span>
            ]
            <br>
            <span class="token keyword">var</span>
            mutableMovies
            <span class="token operator">=</span>
            [
            <span class="token string">"Pulp Fiction"</span>
            ,
            <span class="token string">"Reservoir Dogs"</span>
            ]
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title="array-create empty collections"
similarity=""
text="if you can't give value or elements right away, you can do it like this." +
    "So you put the square brackets and the string and empty parenthesis. So that's the" +
    "short version of defining an empty array."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            movies
            <span class="token operator">=</span>
            [
            <span class="token string">String</span>
            ]()
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)


title="array-access items of an array"
similarity="Not yet decided"
text="If I want to reach items, I can do subscripting like I do here. but that's not the safe operation." +
    "it doesn't return optional. So basically if I have an empty array, then you get the error and it stop." +
    "so basically it is the array out of bounds in Java. So that's not the safe operatrion." +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            movies
            <span class="token operator">=</span>
            [
            <span class="token string">"Pulp Fiction"</span>
            ,
            <span class="token string">"Jackie Brown"</span>
            ,
            <span class="token string">Reservoir Dogs"</span>
            ]
            <br>
            <span class="token keyword">let</span>
            pulpFiction
            <span class="token operator">=</span>
            movies[<span class="token number">0</span>]
        </code>
    </pre>
    `+
    "Safe operations are first and last. So calling .first and .last in your array, " +
    "they return optional values. So that means that you have to unwrap that if you wnat to use that." +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            first
            <span class="token operator">=</span>
            movies<span class="token property">.first</span>
            <br>
            <span class="token keyword">let</span>
            last
            <span class="token operator">=</span>
            movies<span class="token property">.last</span>
        </code>
    </pre>
    `+
    "Then you can check if it's empty or not. you can also count elements on it. "+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">if</span>
            movies<span class="token property">.isEmpty</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"We have no movies at all"</span>
            <span class="token function">)</span>
            <br>
            }
            <span class="token keyword">else</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"We have</span>
            \\(movies<span class="token property">.count</span>)
            <span class="token string">movies"</span>
            <span class="token function">)</span>
            <br>
            <span class="token keyword">let</span>
            second
            <span class="token operator">=</span>
            movies[<span class="token number">1</span>]
            <br>
            }
        </code>
    </pre>
    `

element=[title, similarity, text]
allText.push(element)


title="array-change items in an array"
similarity="not yet decided"
text="Some power stuff there. First is subscripting. you can change the first element to Jakie brown"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            movies
            <span class="token operator">=</span>
            [
            <span class="token string">"Pulp Fiction"</span>
            ,
            <span class="token string">"Reservoir Dogs"</span>
            ]
            <br>
            movies[<span class="token number">0</span>]
            <span class="token operator">=</span>
            <span class="token string">"Jackie Brown"</span>
        </code>
    </pre>
    `+
    "also, you can change the entire range. I can replace the entire range 0 to 1 with your name. " +
    "So basically movies becomes your name. So you can replace a range to another array." +
    "The right side needs to be an array if you wanna do this. so whatever you assign it needs to be an array with the same type"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            movies[<span class="token number">0</span>...<span class="token number">1</span>]
            <span class="token operator">=</span>
            [
            <span class="token string">"Inglorious Bastards"</span>
            ]
        </code>
    </pre>
    `+
    "Now, if you wanna append a single element, the append operation."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            movies<span class="token property">.append</span>(
            <span class="token string">"Django Unchained"</span>
            )
        </code>
    </pre>
    `+
    "And you can also append an entire array."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            movies
            <span class="token operator">+=</span>
            [
            <span class="token string">"Kill Bill"</span>,
            <span class="token string">"Kill Bill 2"</span>
            ]
        </code>
    </pre>
    `+
    "And I can insert on any index using insert operation. "+
    `
    <pre class="language-swift">
        <code class="language-swift">
            movies<span class="token property">.insert</span>(
            <span class="token string">"Jackie Brown"</span>,
            atIndex:
            <span class="token number">1</span>)
        </code>
    </pre>
    `+
    "And I can also do something like remove last which will return the value that got removed from the array."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            removedItem
            <span class="token operator">=</span>
            movies<span class="token property">.removeLast</span>()
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title="array-iterating over an array"
similarity="not yet decided"
text="Array is a sequence as well in Swift. So you can just iterate with for-in loop." +
    "The nice thing in swift is, you also has this nice thing called enumerate. this is a function returns the tuple." +
    "Inside that tuple, you can get the elements for each iteration as the second element. And the first element" +
    "is the index in that iteration." +
    "So instead of like in Java, you first put a variable i in front of your for loop and then put in " +
    "for-in loop or you woul have to stick with for-int version while in Swift you don't need to." +
    "You can just use enumerate. So that's a nice feature"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            movies
            <span class="token operator">=</span>
            [
            <span class="token string">"Pulp Fiction"</span>,
            <span class="token string">"Jackie Brown"</span>,
            <span class="token string">"Reservoir Dogs"</span>
            ]
            <br>
            <span class="token keyword">for</span>
            movie
            <span class="token keyword">in</span>
            movies {
            <br>
            &emsp;
            <span class="token function">print(</span>
            movie
            <span class="token function">)</span>
            <br>
            }
            <br>
            <span class="token keyword">for</span>
            (index, movie)
            <span class="token keyword">in</span>
            <span class="token function">enumerate(</span>
            movies
            <span class="token function">)</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"</span>
            \\(index)
            <span class="token string">:</span>
            \\(movie)
            <span class="token string">"</span>
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)


title="dictionary"
similarity=""
text="So then dictionary, samething let or var. And here is the complicated dictionary where you can see" +
    "the key is the ranges of iPhones and the values are tuples. And the key is limited(I will explain later)" +
    "and the value, you can put anything in here. And in this case, it's a tuple and basically is the resolution of each iPhone."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            resolutions
            <span class="token operator">=</span>
            [
            <span class="token string">"iPhone 3/3GS"</span>
            : (
            <span class="token number">320</span>
            ,
            <span class="token number">480</span>
            ),
            <span class="token string">"iPhone 4/4S"</span>
            : (
            <span class="token number">640</span>
            ,
            <span class="token number">960</span>
            )]
            <br>
            <span class="token keyword">var</span>
            mutableResolutions
            <span class="token operator">=</span>
            [
            <span class="token string">"iPhone 3/3GS"</span>
            : (
            <span class="token number">320</span>
            ,
            <span class="token number">480</span>
            ),
            <span class="token string">"iPhone 4/4S"</span>
            : (
            <span class="token number">640</span>
            ,
            <span class="token number">960</span>
            )]
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title="dictionary-create empty collection"
similarity=""
text="The same goes for dictionary. And here I created the same types as I did before. " +
    "but this time, the empty versions. "+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            resolutions
            <span class="token operator">=</span>
            [
            <span class="token string">String</span>
            : (
            <span class="token number">Int</span>
            ,
            <span class="token number">Int</span>
            )]()
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title="dictionary-accessing items in a dictionary"
similarity="not yet decided"
text="Let's make a dictionary called opposites here. If I want to access items in that dictionary, I can just refer to these items by key. " +
    "obviously, just like in java with get method. The only difference is, since that in java can return null, and in swift, it returns optional." +
    "So you get the optional value back. As you can see here, I am looking for high which is not in my list of keys," +
    "so nil is returned."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            opposites
            <span class="token operator">=</span>
            [
            <span class="token string">"Fire"</span>:<span class="token string">"Ice"</span>,
            <span class="token string">"Hot"</span>:<span class="token string">"Cold"</span>,
            ]
            <br>
            <span class="token keyword">let</span>
            maybeIce
            <span class="token operator">=</span>
            opposites[<span class="token string">"Fire"</span>]
        </code>
    </pre>
    `+
    "You can just check for empty dictionaries and do a count of all the elements. In this case, 2. "+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">if</span>
            (opposites<span class="token property">.isEmpty</span>) {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"We have no opposites at all"</span>
            <span class="token function">)</span>
            <br>
            }
            <span class="token keyword">else</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">We have</span>
            \\(opposites<span class="token property">.count</span>)
            <span class="token string">resolutions"</span>
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)

title="dictionary-changing items in a dictionary"
similarity="not yet decided"
text="Now let's look at changing items in a dictionary. Again, I have to put var to dictionary if I wanna do that." +
    "And I can assign by using just subscripting again. So this is basically added it. So in case, I added high in my dictionary. " +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            opposites
            <span class="token operator">=</span>
            [
            <span class="token string">"Fire"</span>:<span class="token string">"Ice"</span>,
            <span class="token string">"Hot"</span>:<span class="token string">"Cold"</span>,
            ]
            <br>
            opposites[<span class="token string">"High"</span>]
            <span class="token operator">=</span>
            <span class="token string">"Low"</span>
            <br>
        </code>
    </pre>
    `+
    "So if you want to remove item, you can just assign to nil."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            opposites[<span class="token string">"High"</span>]
            <span class="token operator">=</span>
            <span class="token keyword">nil</span>
            <br>
            opposites<span class="token property">.count</span>
        </code>
    </pre>
    `+
    "So basically, I added an element then I removed one, so we get the count of 2."

element=[title, similarity, text]
allText.push(element)

title="dictionary-iterating over a dictionary"
similarity="not yet decided"
text="If you iterate the whole dictionary, you get the tuple back with key and value in it. So that's the first version." +
    "you can also iterate over the keys, you can also iterate over the values. " +
    "So again, tuples being used in here."+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            opposites
            <span class="token operator">=</span>
            [
            <span class="token string">"Fire"</span>:<span class="token string">"Ice"</span>,
            <span class="token string">"Hot"</span>:<span class="token string">"Cold"</span>,
            ]
            <br>
            <span class="token keyword">for</span>
            (key, value)
            <span class="token keyword">in</span>
            opposites {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"The opposite of</span>
            \\(key)
            <span class="token string">is</span>
            \\(value)
            <span class="token string">"</span>
            <span class="token function">)</span>
            <br>
            }
            <br>
            <span class="token keyword">for</span>
            key
            <span class="token keyword">in</span>
            opposites<span class="token property">.keys</span>{
            <br>
            &emsp;
            <span class="token function">print(</span>
            key
            <span class="token function">)</span>
            <br>
            }
            <br>
            <span class="token keyword">for</span>
            value
            <span class="token keyword">in</span>
            opposites<span class="token property">.values</span>{
            <br>
            &emsp;
            <span class="token function">print(</span>
            value
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `
element=[title, similarity, text]
allText.push(element)


