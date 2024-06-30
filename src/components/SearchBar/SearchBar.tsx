import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css"

interface Target extends EventTarget {
  searchImg: HTMLInputElement;
}

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as Target;
    const searchImg = form.searchImg.value;

    if (searchImg.trim() === '') {
      toast('Please fill in search folder', {
        style: {
          color: 'red',
        },
      });
      return;
    }

    onSearch(searchImg);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="searchImg"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}