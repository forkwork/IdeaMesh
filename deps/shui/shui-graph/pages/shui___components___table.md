- ### Props
	- ideamesh.table.version:: 2
	  ideamesh.table.hover:: row
	  ideamesh.table.stripes:: true
	  ideamesh.table.borders:: false
	  | Prop Name | Description | Values |
	  | --- | --- | --- |
	  | `ideamesh.table.version` | The version of the table | 1, 2 |
	  | `ideamesh.table.hover` | The hover effect of the table | cell (default), row, col, both, none |
	  | `ideamesh.table.compact` | Whether to show a compact version of the data | false (default), true |
	  | `ideamesh.table.headers` | The casing that should be applied to the header cols | none (default), uppercase, capitalize, capitalize-first, lowercase |
	  | `ideamesh.table.borders` | Whether or not the table should have borders between all cells and rows | true (default), false |
	  | `ideamesh.table.stripes` | Whether or not the table should have alternately colored table rows | false (default), true |
	  | `ideamesh.table.max-width` | The maximum width (in rems) that should be applied to each column | <any number> (default 30) |
	  | `ideamesh.color` | The color accent of the table | red, orange, yellow, green, blue, purple |
- ### Examples
	- #### Simplest possible markdown table
	  collapsed:: true
		- ideamesh.table.version:: 1
		  | Fruit | Color |
		  | Apples | Red |
		  | Bananas | Yellow |
	- #### Longer more complicated markdown table, with various widths and input types
	  collapsed:: true
		- ideamesh.table.version:: 2
		  | Length | Text | EN | ZH |
		  | --- | --- | --- | --- |
		  | 70 | Ideamesh is a new note-taking app that has been making waves in the productivity community. | x |  |
		  | 138 | With its unique approach to linking and organizing information, Ideamesh allows users to create a highly interconnected and personalized knowledge base. | x |  |
		  | 194 | Unlike traditional note-taking apps, Ideamesh encourages users to embrace the power of plain text and markdown formatting, enabling them to easily manipulate and query their notes. | x |  |
		  | 246 | From students to researchers, Ideamesh's flexible and intuitive interface makes it an ideal tool for anyone looking to optimize their note-taking and knowledge management workflow. | x |  |
		  | 312 | Whether you're looking to organize your thoughts, collaborate with others, or simply streamline your note-taking process, Ideamesh offers a revolutionary approach that is sure to revolutionize the way you work. | x |  |
		  | 35 | Ideamesh 是一款在生产力社群中备受瞩目的新型笔记应用。|  | x |
		  | 59 | Ideamesh 以其独特的链接和组织信息方式，使用户能够创建高度互联且个性化的知识库。 |  | x | 86 | 不同于传统笔记应用，Ideamesh 鼓励用户采用纯文本和 Markdown 格式，使其能够轻松地操作和查询笔记。 |  | x |
		  | 123 | 从学生到研究人员，Ideamesh 灵活直观的界面使其成为任何想要优化笔记和知识管理工作流程的人的理想工具。|  | x |
		  | 152 | 无论您是想整理自己的思路、与他人合作，还是简化笔记流程，Ideamesh 提供的革命性方法肯定会改变您的工作方式。|  | x |
	- #### Query table for blocks
		- ideamesh.table.version:: 2
		  query-table:: true
		  query-properties:: [:block]
		  ideamesh.table.borders:: false
		  {{query #table-example/block}}
		-
		- #### data
			- Block 1 #table-example/block
			  table-example:: true
			- Block 2 #table-example/block
			  table-example:: true
			- Block 3 #table-example/block
			  table-example:: true
	- #### Query table for pages
		- {{query (page-property "table-example" "true")}}
		  ideamesh.table.version:: 2
		- [[Page 1]]
		- [[Page 2]]
		- [[Page 3]]
	- #### Query table for mixed pages and blocks
		- {{query (property "table-example" true)}}
		  query-table:: true
		  ideamesh.table.version:: 2
	-
- {{query }}