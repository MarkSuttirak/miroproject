const useSortData = (data: any[]) => {
    const alphaBeticaldata = data?.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    })

    return { alphaBeticaldata }
}

export default useSortData