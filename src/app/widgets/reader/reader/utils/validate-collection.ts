import { IVirtualListCollection, IVirtualListItem } from 'ng-virtual-list';
import { IBookPageData } from "@shared/models/pages";

/**
 * @author Evgenii Alexandrovich Grebennikov
 * @email djonnyx@gmail.com
 * @license Copyright (c) 2026 Evgenii Alexandrovich Grebennikov (djonnyx@gmail.com tg: http://t.me/djonnyx).
 */
export const validateCollection = (collection: IVirtualListCollection<IBookPageData>): boolean => {
    // нужно написать валидацию

    return true;
}

/**
 * @author Evgenii Alexandrovich Grebennikov
 * @email djonnyx@gmail.com
 * @license Copyright (c) 2026 Evgenii Alexandrovich Grebennikov (djonnyx@gmail.com tg: http://t.me/djonnyx).
 */
export const validateMessage = (collection: IVirtualListItem<IBookPageData>): boolean => {
    // нужно написать валидацию

    return true;
}