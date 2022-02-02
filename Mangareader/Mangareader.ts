import { Source, Manga, MangaStatus, Chapter, ChapterDetails, HomeSectionRequest, HomeSection, MangaTile, SearchRequest, LanguageCode, TagSection, Request, MangaUpdates, SourceTag, TagType, PagedResults } from "paperback-extensions-common"
const SOURCE_DOMAIN = "https://mangareader.to"

export class Mangareader extends Source {
    constructor(cheerio: CheerioAPI) {
        super(cheerio)
    }

    get version(): string { return '0.1.0' }
    get name(): string { return 'Mangareader' }
    get description(): string { return 'A source with a lot of colored manga.' }
    get author(): string { return 'Paperback Develepor' }
    get authorWebsite(): string { return '' }
    get icon(): string { return "logo.png" }
    get hentaiSource(): boolean { return false }
    get sourceTags(): SourceTag[] { return [] }
    get rateLimit(): Number {
      return 2
    }
    get websiteBaseURL(): string { return SOURCE_DOMAIN }

    /**
     * This method has been provided to you as it's probably rather rare that it ever needs to be changed
     * even on different sources.
     * This Method should point to the URL of a specific manga object on your source. Make sure to change
     * line 33 so that it points to your manga! In this case, 'id' is the manga identifier
     */
    getMangaDetailsRequest(ids: string[]): Request[] {
      let requests: Request[] = []
      for (let id of ids) {
        let metadata = { 'id': id }
        requests.push(createRequestObject({
          url: `${SOURCE_DOMAIN}/${id}`,
          metadata: metadata,
          method: 'GET'
        }))
      }
      return requests
    }
    
    getMangaDetails(data: any, metadata: any): Manga[] {
      let manga: Manga[] = []                           // For your getMangaDetailsRequest URL request, fill this object out with each manga
      let $ = this.cheerio.load(data)                   // CheerioJS has been loaded with the HTML response, use this to fill out your objects

      // manga.push(createManga({...}))                 For each object, ALWAYS wrap it in the create tag. createManga({..}), createIconText({...}), etc
      throw new Error("Method not implemented.")
    }
    getChaptersRequest(mangaId: string): Request {
      throw new Error("Method not implemented.")
    }
    getChapters(data: any, metadata: any): Chapter[] {
      throw new Error("Method not implemented.")
    }
    getChapterDetailsRequest(mangaId: string, chapId: string): Request {
      throw new Error("Method not implemented.")
    }
    getChapterDetails(data: any, metadata: any): ChapterDetails {
      throw new Error("Method not implemented.")
    }
    searchRequest(query: SearchRequest): Request {
      throw new Error("Method not implemented.")
    }
    search(data: any, metadata: any): PagedResults {
      throw new Error("Method not implemented.")
    }

}