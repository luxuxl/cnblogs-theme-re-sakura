from urllib import request
from html.parser import HTMLParser

url = "https://www.cnblogs.com/luxuxl/gallery/2405086.html"

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}

req = request.Request(url = url, headers = headers)

html = request.urlopen(req).read().decode('utf8')

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.src = []  # 用于存储所有找到的 src
        self.in_thumbnail = False
        self.current_src = None

    def handle_starttag(self, tag, attrs):
        # 检查是否是 Thumbnail 类元素
        if tag == 'a' and ('class', 'ThumbNail') in attrs:
            self.in_thumbnail = True

        if self.in_thumbnail and tag == 'img':
            self.current_src = [value for attr, value in attrs if attr == 'src'][0]

    def handle_endtag(self, tag):
        # 检查是否是 Thumbnail 类元素结束
        if tag == 'a' and self.current_src:
            # 将当前 src 添加到列表中
            self.src.append(self.current_src)
            self.current_src = None  # 重置信息
            self.in_thumbnail = False


parser = MyHTMLParser()

# 用解析器解析HTML内容
parser.feed(html)

file = open('./wp_list.txt', 'w')

file.write('[\n')

for each in parser.src:
    file.write('\t"' + each.replace('/t','/o') + '",' + '\n')

file.write(']')
