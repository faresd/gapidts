declare module gapi.client {
    module urlshortener {
        var url: {
            get: (params: {
                projection?: string;
                shortUrl: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IUrl
            insert: () => { execute(callback: (data:any, original: string) => void):void; }; // IUrl
            list: (params: {
                projection?: string;
                "start-token"?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IUrlHistory
        };
        interface IAnalyticsSnapshot {
            browsers: IStringCount[];
            countries: IStringCount[];
            longUrlClicks: string; // int64
            platforms: IStringCount[];
            referrers: IStringCount[];
            shortUrlClicks: string; // int64
        }
        interface IAnalyticsSummary {
            allTime: IAnalyticsSnapshot;
            day: IAnalyticsSnapshot;
            month: IAnalyticsSnapshot;
            twoHours: IAnalyticsSnapshot;
            week: IAnalyticsSnapshot;
        }
        interface IStringCount {
            count: string; // int64
            id: string;
        }
        interface IUrl {
            analytics: IAnalyticsSummary;
            created: string;
            id: string;
            kind: string;
            longUrl: string;
            status: string;
        }
        interface IUrlHistory {
            items: IUrl[];
            itemsPerPage: number; // int32
            kind: string;
            nextPageToken: string;
            totalItems: number; // int32
        }
    }
}
