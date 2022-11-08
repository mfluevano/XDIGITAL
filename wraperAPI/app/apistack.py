import httpx
import json

async def getList(order: str = 'desc', sort: str ='activity', intitle: str= 'perl', site='stackoverflow'):
    url =f'https://api.stackexchange.com/2.2/search?order={order}&sort={sort}&intitle={intitle}&site={site}'
    print (url)
    async with httpx.AsyncClient() as client:
        resp: httpx.Response = await client.get(url)

        results = resp.json()
    
    if not results:
        return None
    return results 