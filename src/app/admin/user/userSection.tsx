import React, { useEffect, useState } from 'react'
import styles from './userSection.module.css'
import { UserNavRightSide } from '@/app/ui/userNav/userNav'
import { useGetUserInfoQuery } from '@store/apiSlice';

const UserSection: React.FC = () => {

  const { data: userData, error: userError, isLoading: isLoadingData } = useGetUserInfoQuery(1);
  const [fetchedData, setFetchedData] = useState<any>([])


  useEffect(() => {
    if (isLoadingData) {
      console.log('Data is loading!')
    } else if (userError) {
      console.log(userError);
    } else if (userData) {
      setFetchedData(userData.data);
      console.log(userData.data);
    }
  }, [userData, userError, isLoadingData]);

  return (
    <>
      <section className={`${styles.section}`}>
        <nav>
          <UserNavRightSide />
        </nav>

        <h1 className={`${styles.heading}`}>User List</h1>

        <div className="userListContainer">
          {/* table heading */}
          <div className={`${styles.tableRow} ${styles.tableHeading} dFlex`}>
            <div>#id</div>
            <div>USER</div>
            <div>EMAIL</div>
            <div>OPTIONS</div>
          </div>


          {/* table data, will be iterated and create multiple component */}
          {
            fetchedData.map((current: any, index: number) => {
              return (
                <>
                  <div className={`${styles.tableRow} ${styles.tableData} dFlex`} key={index}>
                    <div>{current.id}</div>
                    <div className='dFlex dAlignItemsCenter'>
                      <img className={styles.userImage} src={current.avatar} alt="" height='60px' width='60px' />
                      <span>{current.first_name} {current.last_name} </span>
                    </div>
                    <div>{current.email}</div>

                    <div className={`dFlex dAlignItemsCenter dSpaceAround ${styles.threeDot}`}>
                      <img src="./threeDotIcon.svg" alt="moreIcon" />
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
      </section>
    </>
  )
}

export default UserSection;