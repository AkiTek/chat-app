import sys
import pya3rt


apikey = "DZZvgcWQOMwarKcXqO21oylfkuyHK1hs"
client = pya3rt.TalkClient(apikey)

def talk(text):
    if text == 'END':
        return('ではまた')
    else:
        ans_json = client.talk(text)
        ans = ans_json['results'][0]['reply']
        return(ans)
