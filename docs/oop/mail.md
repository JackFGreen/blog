# Alan Kay 和 Stefan Ram 关于 OOP 的邮件讨论

http://www.purl.org/stefan_ram/pub/doc_kay_oop_en

## Wed, 23 Jul 2003 09:33:31 -0800

OOP 的两个权威来源

- 国际标准组织在 `ISO/IEC 2382-15` 中的定义
- Alan Kay，国标说他创造了这个词，他在邮件中回复确认了

OOP 历史

- 66 年 11 月，想到 OOP 架构
- 67 年被问，回答是 `object-oriented programming`
- OOP 对 Alan Kay 来说只意味着消息传递、本地保留和保护和隐藏状态过程，以及极端晚期绑定所有的东西

### S -> A

S 问 A OOP 的权威来源

> 亲爱的凯博士，我希望能有一些关于 "面向对象编程 "这个词的权威性的说法，供我在这个问题的教程页面上使用。我认为 "权威 "的只有两个来源，一个是国际标准组织，它在 "ISO/IEC 2382-15 "中定义了 "面向对象"，另一个是你，因为正如他们所说，你创造了这个词。

> At 6:27 PM +0200 7/17/03, Stefan Ram wrote:  
> Dear Dr. Kay, I would like to have some authoritative word on the term "object-oriented programming" for my tutorial page on the subject. The only two sources I consider to be "authoritative" are the International Standards Organization, which defines "object-oriented" in "ISO/IEC 2382-15", and you, because, as they say, you have coined that term.

### A -> S

> Alan Kay 确认

> I'm pretty sure I did.

### S -> A

S 问 A OOP 的第一手资料，最先出现在哪

> 遗憾的是，很难找到有你对这个词的定义或描述的网页或资料来源。关于你在这方面可能说过的一些报道（比如 "继承、多态性和封装"），但这些都不是第一手资料来源。我也知道后来你更强调了 "消息传递"--但我还是想知道 "面向对象"。为了备案，我的教程页面，以及进一步的发行和发布，能否请您解释一下。"面向对象 "这个词最早是在什么时候、什么地方使用的？

> Unfortunately, it is difficult to find a web page or source with your definition or description of that term. There are several reports about what you might have said in this regard (like "inheritance, polymorphism and encapsulation"), but these are not first-hand sources. I am also aware that later you put more emphasis on "messaging" - but I still would like to know about "object oriented". For the records, my tutorial page, and further distribution and publication could you please explain: When and where was the term "object-oriented" used first?

### A -> S

- 66 年 11 月，想到 OOP 架构
- 67 年被问，回答是 OOP
- 构思来源的几个部分
  - 细胞，单机，消息传递
  - 摆脱数据，B5000 HW 架构
  - 处理通用行为，多态性，genericity
  - 继承，Simula
  - 可扩展，后期绑定的底层结构，LISP

> 66 年 11 月后的某个时候，在犹他州，受 Sketchpad、Simula、ARPAnet 的设计、Burroughs B5000 以及我的生物学和数学背景的影响，我想到了一个编程的架构。大概是在 1967 年的时候，有人问我在做什么，我说 "这是面向对象的编程"。

> At Utah sometime after Nov 66 when, influenced by Sketchpad, Simula, the design for the ARPAnet, the Burroughs B5000, and my background in Biology and Mathematics, I thought of an architecture for programming. It was probably in 1967 when someone asked me what I was doing, and I said: "It's object-oriented programming".

> 其最初的构思有以下几个部分：

> The original conception of it had the following parts.

- 我认为对象就像生物学的细胞或者网络中的单机，只能传递信息（所以消息传递在一开始就出现了----花了好一阵子才知道如何用编程语言高效地做消息传递，使之足够有用）
- I thought of objects being like biological cells and/or individual computers on a network, only able to communicate with messages (so messaging came at the very beginning -- it took a while to see how to do messaging in a programming language efficiently enough to be useful).

- 我想摆脱数据。B5000 几乎通过其几乎令人难以置信的 HW 架构做到了这一点。我意识到单元格/整体计算机的隐喻将摆脱数据，而"<-"将只是另一个消息令牌（我花了相当长的时间来思考这个问题，因为我真的把所有这些符号都当成了函数和过程的名字。
- I wanted to get rid of data. The B5000 almost did this via its almost unbelievable HW architecture. I realized that the cell/whole-computer metaphor would get rid of data, and that "<-" would be just another message token (it took me quite a while to think this out because I really thought of all these symbols as names for functions and procedures.

- 我的数学背景让我意识到，每个对象都可以有若干个与之相关联的渐变体，并且可以有这些渐变体的族，而这些渐变体将是非常非常有用的。"多态性 "这个词是后来强加给我的（我想是 Peter Wegner 提出的），而且这个词并不完全有效，因为它确实来自于函数的命名法，而我想要的不仅仅是函数。我编了一个术语 "多态性"，用于处理准代数形式下的通用行为。
- My math background made me realize that each object could have several algebras associated with it, and there could be families of these, and that these would be very very useful. The term "polymorphism" was imposed much later (I think by Peter Wegner) and it isn't quite valid, since it really comes from the nomenclature of functions, and I wanted quite a bit more than functions. I made up a term "genericity" for dealing with generic behaviors in a quasi-algebraic form.

- 我不喜欢 Simula I 或 Simula 67 的继承方式（虽然我认为 Nygaard 和 Dahl 都是伟大的思想家和设计师）。所以我决定不把继承作为一个内置的功能，直到我更了解它为止。
- I didn't like the way Simula I or Simula 67 did inheritance (though I thought Nygaard and Dahl were just tremendous thinkers and designers). So I decided to leave out inheritance as a built-in feature until I understood it better.

> 我最初对这个体系结构的实验是用我从 van Wijngaarten 和 Wirth 的 "Algol 的泛化 "和 Wirth 的 Euler 的模型改编的。这两个模型都比较类似于 LISP，但有一个比较常规的可读语法。当时我还不理解 LISP 的怪物式的有形金属语言的想法，但从各种来源，包括 Irons 的 IMP 中得到了一些关于可扩展语言的想法，这让我有点接近了。

> My original experiments with this architecture were done using a model I adapted from van Wijngaarten's and Wirth's "Generalization of Algol" and Wirth's Euler. Both of these were rather LISP-like but with a more conventional readable syntax. I didn't understand the monster LISP idea of tangible metalanguage then, but got kind of close with ideas about extensible languages draw from various sources, including Irons' IMP.

> 第二阶段是终于理解了 LISP，然后利用这种理解做了更漂亮更小更强大的后期绑定的底层结构。Dave Fisher 的论文是按照 "McCarthy "的风格完成的，他关于可扩展控制结构的想法对我们很有帮助。这时另一个很大的影响是 Carl Hewitt 的 PLANNER（考虑到它在 Prolog 之前就已经很好地、很早地预见了 Prolog，所以它一直没有得到应有的认可）。

> The second phase of this was to finally understand LISP and then using this understanding to make much nicer and smaller and more powerful and more late bound understructures. Dave Fisher's thesis was done in "McCarthy" style and his ideas about extensible control structures were very helpful. Another big influence at this time was Carl Hewitt's PLANNER (which has never gotten the recognition it deserves, given how well and how earlier it was able to anticipate Prolog).

> 最初的 Smalltalk 在施乐 PARC 的出现，就是出于上述原因。后来的 Smalltalk 在历史一章的结尾处被人抱怨：他们向 Simula 退步，没有用更安全的扩展机制来代替更安全的扩展机制，而这些扩展机制的作用也不尽相同。

> The original Smalltalk at Xerox PARC came out of the above. The subsequent Smalltalk's are complained about in the end of the History chapter: they backslid towards Simula and did not replace the extension mechanisms with safer ones that were anywhere near as useful.

### S -> A

- OOP 是什么
- object 的来源，在 Smalltalk 的早期历史中

> "面向对象[编程]"对你来说意味着什么？  
> (不需要类似于教程的介绍，只需要用其他概念来做一个简短的解释[比如 "用继承、多态和封装编程"]，如果可能的话，用其他概念来给熟悉的读者做一个简短的解释。另外，不需要解释 "object"，因为我已经有你在 "Smalltalk 的早期历史 "中对 "object "的解释的来源。)

> What does "object-oriented [programming]" mean to you?  
> (No tutorial-like introduction is needed, just a short explanation [like "programming with inheritance, polymorphism and encapsulation"] in terms of other concepts for a reader familiar with them, if possible. Also, it is not neccessary to explain "object", because I already have sources with your explanation of "object" from "Early History of Smalltalk".)

### A -> S

- OOP 对我来说只意味着消息传递、本地保留和保护和隐藏状态过程，以及极端晚期绑定所有的东西

> 我不反对类型，但我不知道有什么类型系统不是完全讨厌，所以我还是喜欢动态类型。

> (I'm not against types, but I don't know of any type systems that aren't a complete pain, so I still like dynamic typing.)

> OOP 对我来说只意味着消息传递、本地保留和保护和隐藏状态过程，以及极端晚期绑定所有的东西。这在 Smalltalk 和 LISP 中都可以做到。有可能还有其他系统可以做到这一点，但我不知道。

> OOP to me means only messaging, local retention and protection and hiding of state-process, and extreme late-binding of all things. It can be done in Smalltalk and in LISP. There are possibly other systems in which this is possible, but I'm not aware of them.

## At 10:05 PM +0200 7/26/03

### S -> A

> 我只想说一声 "谢谢"，谢谢你的解释（包括上面没有引用的部分）！

> I just want to say "thank you" for your explanations (including the parts not quoted above)!

> "本地保留 "对我来说是一个新的概念，在 OOP 的语境中，我认为它指的是状态过程，指的是对象对其状态过程的占有，因此对象的状态是和对象一起在本地保留，而不是在其他地方。

> "local retention" is a new notion to me in the context of OOP, and I assume it refers to state-process and means that an object is in possession of its state-process, so that the state of an object is kept locally with the object and not elsewhere.

> 我已在网上发布了你的回复，但出于隐私考虑，删除了 E-Mail 地址和类似的标题行。

> I have published your reply on the web, but have removed the E-Mail addresses and similar header lines for privacy.

## Sat, 26 Jul 2003 13:47:59 -0800

### A -> S

- Simula 催化，两条路径
  - 生物/网络非数据程序
  - 抽象数据类型，更有发挥
- 数据消失，无数据编程，lamda 表达式抽象数据
- RPC 和 object & meessages

> 我应该提到的一点是，在 Simula 的催化下，有两条主要路径。早期的一条（只是偶然的）是我走的生物/网络非数据程序的路线。另一条是后来作为研究对象的抽象数据类型，这条路得到了更多的发挥。

> One of the things I should have mentioned is that there were two main paths that were catalysed by Simula. The early one (just by accident) was the bio/net non-data-procedure route that I took. The other one, which came a little later as an object of study was abstract data types, and this got much more play.

> 从历史上看，值得一看美国空军的 Burroughs 220 文件系统（我在 Smalltalk 历史中描述过），麻省理工学院的 Doug Ross 的早期工作（AED 和更早的工作），他主张在数据结构中嵌入程序指针，Sketchpad（它有完全的多态性---例如，数据结构中相同的偏移量意味着 "显示"，并且会有一个指针指向该结构所代表的对象类型的适当例程，等等。还有 Burroughs B5000，它的程序引用表是真正的 "大对象"，同时包含 "数据 "和 "程序 "的指针，但如果它试图去追寻数据并找到一个程序指针，往往可以做正确的事情。而我早期用 Utah 的东西解决的第一个问题就是只使用方法和对象的 "数据消失"。在 60 年代末（我想是这样），Bob Balzer 写了一篇相当不错的论文，叫做 "无数据编程"，不久之后 John Reynolds 写了一篇同样不错的论文 "Gedanken"（我想是 1970 年），他在其中表明，用正确的方法使用 lamda 表达式可以让数据被过程抽象化。

> If we look at the whole history, we see that the proto-OOP stuff started with ADT, had a little fork towards what I called "objects" -- that led to Smalltalk, etc.,-- but after the little fork, the CS establishment pretty much did ADT and wanted to stick with the data-procedure paradigm. Historically, it's worth looking at the USAF Burroughs 220 file system (that I described in the Smalltalk history), the early work of Doug Ross at MIT (AED and earlier) in which he advocated embedding procedure pointers in data structures, Sketchpad (which had full polymorphism -- where e.g. the same offset in its data structure meant "display" and there would be a pointer to the appropriate routine for the type of object that structure represented, etc., and the Burroughs B5000, whose program reference tables were true "big objects" and contained pointers to both "data" and "procedures" but could often do the right thing if it was trying to go after data and found a procedure pointer. And the very first problems I solved with my early Utah stuff was the "disappearing of data" using only methods and objects. At the end of the 60s (I think) Bob Balzer wrote a pretty nifty paper called "Dataless Programming", and shortly thereafter John Reynolds wrote an equally nifty paper "Gedanken" (in 1970 I think) in which he showed that using the lamda expressions the right way would allow data to be abstracted by procedures.

> 喜欢将对象作为非数据的人数量较少，包括我自己、Carl Hewitt、Dave Reed 和其他一些人--几乎所有的人都来自于 ARPA 社区，并以这样或那样的方式参与了 ARPAnet->Internet 的设计，其中基本的计算单位是整个计算机。但是，为了证明一个想法是多么顽强地坚持下去，在整个七、八十年代，有很多人试图用 "远程程序调用 "而不是思考对象和消息来过日子。Sic transit gloria mundi。

> The people who liked objects as non-data were smaller in number, and included myself, Carl Hewitt, Dave Reed and a few others -- pretty much all of this group were from the ARPA community and were involved in one way or another with the design of ARPAnet->Internet in which the basic unit of computation was a whole computer. But just to show how stubbornly an idea can hang on, all through the seventies and eighties, there were many people who tried to get by with "Remote Procedure Call" instead of thinking about objects and messages. Sic transit gloria mundi.
