import { Projects } from "../../../screens";
import type { ContentProps } from "../type";

import { Card } from "antd";

const Content: React.FC<ContentProps> = () => {
   return (
      <Card className="bg-white shadow-md rounded-lg p-6 mx-auto mt-6" bordered={false}>
        <Projects />
      </Card>
   );
};

export default Content;
