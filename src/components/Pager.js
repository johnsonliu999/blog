import React from 'react'
import {Pager as ReactPager} from 'react-bootstrap'

const Pager = ({prev, next}) => (
    <ReactPager>
        <ReactPager.Item previous href={prev}>
            {"< Previous"}
        </ReactPager.Item>
        <ReactPager.Item next href={next}>
            {"next >"}
        </ReactPager.Item>
    </ReactPager>
);

export default Pager