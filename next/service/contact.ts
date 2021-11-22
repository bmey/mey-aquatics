import queryString from 'query-string'

const emailQuery = queryString.stringify({
  subject: "Mey's Aquatics Inquiry",
  body:
    '(Please fill out the questions below)\n\n' +
    'My name is: \n\n' +
    'The best way to contact me is: \n\n' +
    'I am looking to: \n' +
    '- Buy\n' +
    '- Trade\n' +
    '- Question about an item\n' +
    '- Something else\n',
})

export const email = 'meysaquatics@gmail.com'

export const emailHref = `mailto:${email}?${emailQuery}`
