import React from 'react'


export default function About() {
  return (
    <div data-ux="Block" data-aid="CONTACT_HOURS_REND">
            <div data-ux="Element" id="bs-3">
              <span data-ux="Element">
                <table style={{borderSpacing: '0px', textAlign: 'left', display: 'inline-table'}}>
                  <tr
                    data-aid="CONTACT_HOURS_DAY_REND_1"
                    style={{cursor: 'pointer'}}
                  >
                    <td>
                      <p data-ux="ContentText" >
                        Mon
                      </p>
                    </td>
                    <td>
                      <p data-ux="ContentText" >
                        09:00 am – 05:00 pm
                      </p>
                    </td>
                    {/* <td>
                      <p
                        data-ux="ContentText"
                        data-aid="CONTACT_HOURS_COLLAPSED_ARROW"
                      >
                        <span
                          rel=""
                          role="button"
                          aria-haspopup="menu"
                          data-ux="Link"
                          data-typography="LinkAlpha"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="16"
                            height="16"
                            data-ux="Icon"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M19.544 7.236a.773.773 0 0 1-.031 1.06l-7.883 7.743-7.42-7.742a.773.773 0 0 1 0-1.061.699.699 0 0 1 1.017 0l6.433 6.713 6.868-6.745a.698.698 0 0 1 1.016.032"
                            ></path>
                          </svg>
                        </span>
                      </p>
                    </td> */}
                  </tr>
                  <tr data-aid="CONTACT_HOURS_DAY_REND_2" style={{cursor: 'auto'}}>
                    <td>
                      <p data-ux="ContentText">Tue</p>
                    </td>
                    <td>
                      <p data-ux="ContentText">09:00 am – 05:00 pm</p>
                    </td>
                    <td></td>
                  </tr>
                  <tr data-aid="CONTACT_HOURS_DAY_REND_3" style={{cursor: 'auto'}}>
                    <td>
                      <p data-ux="ContentText">Wed</p>
                    </td>
                    <td>
                      <p data-ux="ContentText">09:00 am – 05:00 pm</p>
                    </td>
                    <td></td>
                  </tr>
                  <tr data-aid="CONTACT_HOURS_DAY_REND_4" style={{cursor: 'auto'}}>
                    <td>
                      <p data-ux="ContentText">Thu</p>
                    </td>
                    <td>
                      <p data-ux="ContentText">09:00 am – 05:00 pm</p>
                    </td>
                    <td></td>
                  </tr>
                  <tr data-aid="CONTACT_HOURS_DAY_REND_5" style={{cursor: 'auto'}}>
                    <td>
                      <p data-ux="ContentText">Fri</p>
                    </td>
                    <td>
                      <p data-ux="ContentText">09:00 am – 05:00 pm</p>
                    </td>
                    <td></td>
                  </tr>
                  <tr data-aid="CONTACT_HOURS_DAY_REND_6" style={{cursor: 'auto'}}>
                    <td>
                      <p data-ux="ContentText">Sat</p>
                    </td>
                    <td>
                      <p data-ux="ContentText">Closed</p>
                    </td>
                    <td></td>
                  </tr>
                  <tr data-aid="CONTACT_HOURS_DAY_REND_0" style={{cursor: 'auto'}}>
                    <td>
                      <p data-ux="ContentText">Sun</p>
                    </td>
                    <td>
                      <p data-ux="ContentText">Closed</p>
                    </td>
                    <td></td>
                  </tr>
                </table>
              </span>
            </div>
          </div>
  )
}


