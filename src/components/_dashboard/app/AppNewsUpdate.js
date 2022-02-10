// import faker from 'faker';
// import PropTypes from 'prop-types';
// import { Icon } from '@iconify/react';
// import { formatDistance } from 'date-fns';
// import { Link as RouterLink } from 'react-router-dom';
// import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
// import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
import { Card, Typography, CardHeader } from '@mui/material';
// utils
// import { mockImgCover } from '../../../utils/mockImages';
//
// import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

// const NEWS = [...Array(5)].map((_, index) => {
//   const setIndex = index + 1;
//   return {
//     title: faker.name.title(),
//     description: faker.lorem.paragraphs(),
//     image: mockImgCover(setIndex),
//     postedAt: faker.date.soon()
//   };
// });

// ----------------------------------------------------------------------

// NewsItem.propTypes = {
//   news: PropTypes.object.isRequired
// };

// function NewsItem() {
  // const { image, title, description, postedAt } = news;

  // return (<></>
    // <Stack direction="row" alignItems="center" spacing={2}>
    //   <Box
    //     component="img"
    //     alt={title}
    //     src={image}
    //     sx={{ width: 48, height: 48, borderRadius: 1.5 }}
    //   />
    //   <Box sx={{ minWidth: 240 }}>
    //     <Link to="#" color="inherit" underline="hover" component={RouterLink}>
    //       <Typography variant="subtitle2" noWrap>
    //         {title}
    //       </Typography>
    //     </Link>
    //     <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
    //       {description}
    //     </Typography>
    //   </Box>
    //   <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
    //     {formatDistance(postedAt, new Date())}
    //   </Typography>
    // </Stack>
  // );
// }

export default function AppNewsUpdate() {
  return (
    <Card>
      <CardHeader title="Description" />
      <Typography className="text-center my-2" style={{ padding: "20px" }} variant="subtitle2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores voluptatem aspernatur ipsam dolores nulla non architecto numquam vero aliquam laudantium quos odio, cupiditate quas facere sequi atque tempore expedita.S
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aut maxime quis voluptatum. Autem necessitatibus beatae tempore vitae dolore corporis nemo voluptatem magni!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor quasi totam, magnam fugiat illum iusto accusantium ex nam sequi atque blanditiis exercitationem officiis, earum accusamus nostrum quod quam alias enim vero. Veritatis ab odit totam necessitatibus possimus? Consequatur magnam asperiores laborum odit? Facere cum et commodi rem facilis, voluptate eligendi laborum? Non voluptate sint numquam repellat aut maiores similique nulla adipisci! Omnis sequi saepe, est aperiam eligendi quo dolore! Esse expedita architecto cum consequuntur blanditiis voluptatibus eligendi accusamus, accusantium dae quae iste a pariatur, et non praesentium asperiores accusamus, magnam repudiandae facilis sint blanditiis officiis! Dicta iure a illum sapiente quia. Magnam ex neque, vel accusantium sit distinctio, itaque quasi cupiditate iste quidem beatae, aut nihil odit voluptatem consequatur ratione? Iste nihil est cumque odit, aspernatur enim quaerat quod reprehenderit dolores debitis ut reiciendis maiores porro suscipit nisi expedita tempora.
      </Typography>

      {/* <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {NEWS.map((news) => (
            <NewsItem key={news.title} news={news} />
          ))}
        </Stack>
      </Scrollbar> */}

      {/* <Divider /> */}

      {/* <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View all
        </Button>
      </Box> */}
    </Card>
  );
}
