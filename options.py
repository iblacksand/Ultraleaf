i = 0;

r = open("options.txt", "r");

s = r.readline();

while(s != ""):
    print("case "+ str(i) + ":\n theme=\"" + s.strip().replace(" ", "_").lower() + "\";\nbreak;\n")
    i = i + 1
    s = r.readline();