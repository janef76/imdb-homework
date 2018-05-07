import React, {Component} from 'react';
import ShowTimesList from '../components/ShowTimeList.js';

class ShowTimesBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, title: 'Sherlock Knomes', url: 'https://www.imdb.com/title/tt2296777/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2f2bb126-46f8-48e8-a719-204cafffa9d4&pf_rd_r=QQEM5BEXM10R6MRGSNAN&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0'},
        { id: 2, title: 'Life of the Party', url: 'https://www.imdb.com/title/tt5619332/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2f2bb126-46f8-48e8-a719-204cafffa9d4&pf_rd_r=QQEM5BEXM10R6MRGSNAN&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t1'},
        { id: 3, title: 'Breaking In', url: 'https://www.imdb.com/title/tt7137846/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2f2bb126-46f8-48e8-a719-204cafffa9d4&pf_rd_r=QQEM5BEXM10R6MRGSNAN&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t2'},
        { id: 4, title: 'Revenge', url: 'https://www.imdb.com/title/tt6738136/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2f2bb126-46f8-48e8-a719-204cafffa9d4&pf_rd_r=QQEM5BEXM10R6MRGSNAN&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t6'},
        { id: 5, title: 'The Cured', url: 'https://www.imdb.com/title/tt3463106/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2f2bb126-46f8-48e8-a719-204cafffa9d4&pf_rd_r=QQEM5BEXM10R6MRGSNAN&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t8'}
      ]
    };
  }

  render() {
    return (
      <div className="show-time-box">
        UK Openings This Week
        <ShowTimesList data={this.state.data} />
      </div>
    );
  }
}

export default ShowTimesBox;
