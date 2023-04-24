"use strict";

const AccessService = require("../services/access.service");

class AccessController {
  signUp = async (req, res, next) => {
    try {
      console.log(`[P]::signUp::`, req.body);
      const name = "dinhtronglam";
      const email = "dinhtronglam172003@gmail.com";
      const password = "1$Zsaqwe";
      return (
        res
          .status(201)
          //.json(await AccessService.signUp({ name, email, password }));
          .json(await AccessService.signUp(req.body))
      );
      // return res.status(201).json({
      //   code: "2001",
      //   metadata: { useid: 1 },
      // });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new AccessController();
