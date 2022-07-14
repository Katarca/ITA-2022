import { BodyTextGrey } from '../typo/BodyText'
import {
  TimelineContent,
  TimelineDate,
  TimelineDot,
  TimelineItem,
  TimelineItems,
} from './Styles/StyledTimeline'
import React from 'react'
import Section from '../Section/Section'

const timelineData = [
  {
    year: '1995',
    info: 'JavaScript was invented by Brendan Eich',
  },
  {
    year: '1996',
    info: 'Netscape 2 was released with JavaScript 1.0',
  },
  {
    year: '1997',
    info: 'JavaScript became an ECMA standard (ECMA-262)',
  },
  {
    year: '1997',
    info: 'ECMAScript 1 was released',
  },
  {
    year: '1997',
    info: 'IE 4 was the first browser to support ES1',
  },
  {
    year: '1998',
    info: 'ECMAScript 2 was released',
  },
  {
    year: '1998',
    info: 'Netscape 42 was released with JavaScript 1.3',
  },
  {
    year: '1999',
    info: 'IE 5 was the first browser to support ES2',
  },
  {
    year: '1999',
    info: 'ECMAScript 3 was released',
  },
  {
    year: '2000',
    info: 'IE 5.5 was the first browser to support ES3',
  },
  {
    year: '2000',
    info: 'Netscape 62 was released with JavaScript 1.5',
  },
  {
    year: '2000',
    info: 'Firefox 1 was released with JavaScript 1.5',
  },
  {
    year: '2008',
    info: 'ECMAScript 4 was abandoned',
  },
  {
    year: '2009',
    info: 'ECMAScript 5 was released',
  },
  {
    year: '2011',
    info: 'IE 9 was the first browser to support ES5 *',
  },
  {
    year: '2011',
    info: 'Firefox 4 was released with JavaScript 1.8.5',
  },
  {
    year: '2012',
    info: 'Full support for ES5 in Safari 6',
  },
  {
    year: '2012',
    info: 'Full support for ES5 in IE 10',
  },
  {
    year: '2012',
    info: 'Full support for ES5 in Chrome 23',
  },
  {
    year: '2013',
    info: 'Full support for ES5 in Firefox 21',
  },
  {
    year: '2013',
    info: 'Full support for ES5 in Opera 15',
  },
  {
    year: '2014',
    info: 'Full support for ES5 in all browsers',
  },
  {
    year: '2015',
    info: 'ECMAScript 6 was released',
  },
  {
    year: '2016',
    info: 'Full support for ES6 in Chrome 51',
  },
  {
    year: '2016',
    info: 'Full support for ES6 in Opera 38',
  },
  {
    year: '2016',
    info: 'Full support for ES6 in Edge 14',
  },
  {
    year: '2016',
    info: 'Full support for ES6 in Safari 10',
  },
  {
    year: '2016',
    info: 'Full support for ES6 in Firefox 52',
  },
  {
    year: '2018',
    info: 'Full support for ES6 in all browsers **',
  },
]

const Timeline = () => {
  return (
    <Section id='timeline' className='timeline-section'>
      <TimelineItems>
        {timelineData.map((data, i) => (
          <TimelineItem key={i}>
            <TimelineDot />
            <TimelineDate>{data.year}</TimelineDate>
            <TimelineContent>
              <BodyTextGrey>{data.info}</BodyTextGrey>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineItems>
    </Section>
  )
}

export default Timeline
