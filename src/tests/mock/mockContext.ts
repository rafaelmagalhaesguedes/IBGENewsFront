import { vi } from 'vitest';

export const mockContextValue = {
  dataNews: [],
  filteredNews: [],
  isLoading: false,
  filterByString: vi.fn(),
  filterByRecent: vi.fn(),
  filterByRelease: vi.fn(),
  filterByNoticia: vi.fn(),
  filterByFavorites: vi.fn(),
  filterByOldest: vi.fn(),
};
