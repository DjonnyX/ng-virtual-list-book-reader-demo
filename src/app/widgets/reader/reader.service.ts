import { BehaviorSubject, Observable } from "rxjs";
import { Id, NgVirtualListComponent } from 'ng-virtual-list';
import { IGetBookData } from "./model/book";

/**
 * @author Evgenii Alexandrovich Grebennikov
 * @email djonnyx@gmail.com
 * @license Copyright (c) 2026 Evgenii Alexandrovich Grebennikov (djonnyx@gmail.com tg: http://t.me/djonnyx).
 */
export interface IBookChunkParams {
    number?: number;
    size?: number;
}

/**
 * @author Evgenii Alexandrovich Grebennikov
 * @email djonnyx@gmail.com
 * @license Copyright (c) 2026 Evgenii Alexandrovich Grebennikov (djonnyx@gmail.com tg: http://t.me/djonnyx).
 */
export abstract class ReaderService {
    virtualList: NgVirtualListComponent | null = null;

    protected _$bookId = new BehaviorSubject<Id>(0);
    readonly $bookId = this._$bookId.asObservable();

    abstract getPages(chatId: Id, chunk?: IBookChunkParams): Observable<IGetBookData>;

    abstract clear(bookId: Id): void
}