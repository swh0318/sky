## 1. 猫头鹰选择符号
* 作用：相邻兄弟选择器，这个选择器能选择紧接在另一个元素后的元素，且二者有相同父元素
* 语法：.media * + * {color: blue;}
* 场景：首行不加margin，其他行加margin
## 2.元素的第一个子元素
* 语法：.tile > :first-child
## 3. 选择一个元素但不是第一个元素:
* ul li:not(:nth-child(1)) {  
  color: red;  
  }
## 3.组合选择器
- 后代选择器（Descendant Selector）：选择指定元素内部的所有符合条件的后代元素。例如，div p 选择所有在div元素内部的p元素。
- 子元素选择器（Child Selector）：选择指定元素的直接子元素。例如，ul > li 选择所有直接作为ul元素的子元素的li元素。
- 相邻兄弟选择器（Adjacent Sibling Selector）：选择与指定元素在同一层级且紧接在它后面的元素。例如，h2 + p 选择所有紧接在h2元素后面的p元素。
- 通用兄弟选择器（General Sibling Selector）：选择与指定元素在同一层级的所有后续兄弟元素。例如，h2 ~ p 选择所有与h2元素在同一层级的后续p元素。
- 并集选择器是一种CSS选择器，它允许将多个选择器组合在一起，以便同时对多个元素应用相同的样式。例如，h1, h2, h3 { color: red; }
## 4.伪类选择器
- :hover：选择鼠标悬停在上面的元素。
- :focus：选择获得焦点的元素。
- :active：选择被用户激活的元素，例如点击的按钮。
- :visited：选择用户已经访问过的链接。
- :link：选择未被访问的链接。
- :first-child：选择每个元素的第一个子元素。
- :last-child：选择每个元素的最后一个子元素。
- :nth-child(n)：选择每个元素的第n个子元素。
- :nth-last-child(n)：选择每个元素的倒数第n个子元素。
- :enabled：选择每一个启用的元素。
- :disabled：选择每一个禁用的元素。
- :checked：选择每一个被选中的元素（单选按钮、复选框等）。
- :invalid：选择每一个无效的元素。
:valid：选择每一个有效的元素。

## 5.CSS选择器类型：
- 元素选择器：这是最基本的选择器，它根据HTML元素的名称来选择。例如，p选择器会选择页面上的所有段落元素。
- 类选择器：通过元素的class属性来选择元素。例如，.intro选择器会选择所有class为"intro"的元素。
- ID选择器：通过元素的ID属性来选择元素。例如，#firstname选择器会选择ID为"firstname"的元素。请注意，每个页面中的ID应该是唯一的。
- 属性选择器：选择具有特定属性的元素。例如，[target]选择器会选择所有具有"target"属性的元素。
- 伪类选择器：用于选择特定状态的元素，如:hover，:active等。例如，:hover选择器会选择鼠标指针悬停在其上的元素。
- 组合选择器：通过组合以上几种选择器，我们可以创建非常具体的选择器。例如，p.intro选择器会选择所有class为"intro"的段落元素。
- 通配符选择器：*选择器，可以选择页面上的所有元素。

## 6.CSS水平居中的方法有以下几种：
- 对于行内元素，使用 text-align:center; 实现水平居中。
- 对于确定宽度的块级元素，使用 margin-left:auto; margin-right:auto; 实现水平居中。
- 对于固定宽度的块级元素，使用绝对定位和 margin-left: -(宽度值/2) 实现水平居中。
- 通过 display:flex; 实现CSS水平居中，原理是父元素 display:flex; 并设置 flex-direction:column; 而子元素 align-self:center; 。
- 通过 display:table-cell; 和 margin-left:auto; 实现CSS水平居中，适合于父元素和子元素的宽度都确定的情况。
- 通过绝对定位实现CSS水平居中。
- 通过 transform: scaleX(0.5); 实现CSS水平居中。
## 7. 绝对定位absolute：
- 如果父元素未被定位，那么浏览器会沿着DOM树往上找它的祖父、曾祖父，直到找到一个定位元素，用它作为包含块。
## 8. 固定定位fixed
- 相对于视口位置
## 9. 相对定位relative
- 相对定位的元素以及它周围的所有元素，都还保持着原来的位置
## 10. 粘性定位
- 模态框使用固定定位。
- 下拉菜单、工具提示及其他动态交互使用绝对定位。
## 11. 层叠上下文和 z-index
- 只对定位元素有效；它会创建一个层叠上下文
## 12. blcok、inline、inline-block的区别
- 块级元素（block）：
块级元素在页面中占据其父元素的全部宽度，创建“块”，并在其前后创建新行。例如：DIV、P、H1-H6、FORM、TABLE、UL/OL等。
特点：独占一行，从上到下垂直排列，每个块级元素至少会占据一整行的宽度。
属性设置：可以设置width和height属性，默认为父元素的width和height。
边距和填充：margin和padding属性都有效，会产生边距和填充效果。
- 行内元素（inline）：
行内元素不会打断文本行，而是在文本中流动。例如：SPAN、A、EM、LABEL、INPUT、SELECT、TEXTAREA、I、BR等。
特点：与其他元素在同一行内显示，直到一行排不下才会换行。
属性设置：无法设置width和height属性，因为行内元素的大小由其内容决定。
边距和填充：对于margin和padding属性，只有水平方向的属性（如margin-left, margin-right, padding-left, padding-right）有效，垂直方向的属性（如padding-top, padding-bottom, margin-top, margin-bottom）无效。
- 行内块级元素（inline-block）：
行内块级元素是行内元素和块级元素的组合。它像块级元素一样，可以设置width和height属性，但又像行内元素一样，不会独占一行。
特点：行内块级元素可以在同一行内显示多个元素，直到一行排不下才会换行。同时，它可以设置width和height属性。
边距和填充：与块级元素类似，margin和padding属性都有效，会产生边距和填充效果。但是注意，垂直方向的属性（如padding-top, padding-bottom, margin-top, margin-bottom）在某些情况下可能无效，这取决于浏览器和具体的CSS规则。
## 13. 如何让元素居中
- http://howtocenterincss.com/



