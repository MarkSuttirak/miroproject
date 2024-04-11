const useSortData = (data: any[]) => {
    const alphabeticaldata = data?.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    })

    return { alphabeticaldata }
}

export default useSortData