type Metadata = {
  title: string
  publishedAt: string
}

export function getNews() {
  return [
    {
      slug: "portfolio-deployment",
      title: "Deployed my portfolio",
      publishedAt: "2026-01-24"
    },
    {
      slug: "joined-bottinitlab-",
      title: "Joined the Bottini Lab as a Research Assistant",
      publishedAt: "2025-05-21"
    },
    // {
    //   slug: "news-3",
    //   title: "News 3",
    //   publishedAt: "2026-01-20"
    // }
  ];
}


export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
