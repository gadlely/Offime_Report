package Offime.Offime.dto.reports.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RepliesReqDto {
    private String content;
    private Long writerId;
    private Long reportId;
}
