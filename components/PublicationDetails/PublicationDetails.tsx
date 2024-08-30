import Link from "next/link";
import moment from "moment";

import styles from './PublicationDetails.module.css';

export const PublicationDetails = ({ publisher, createdAt }: any) => {
	return (
        <div className="p-[30px] relative !py-0 flex items-center mb-[10px]">
            {publisher && <>
                <Link href={publisher.path || ''} className="flex items-center">
                    <img
                        src={publisher.picture?.['25x25']}
                        alt=""
                        loading="lazy"
                        className="min-w-[25px] max-w-[25px] min-h-[25px] max-h-[25px] bg-cover bg-center !rounded-[50%] bg-[#eee] object-cover"
                    />
                    <div className="ml-[10px] font-medium">
                        {publisher.name}
                    </div>
                </Link>
                <div className={styles.divSeparator}></div>
            </>}
            <div>
                {moment(createdAt).fromNow()}
            </div>
        </div>
	);
};
